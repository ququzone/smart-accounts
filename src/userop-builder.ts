import * as ethers from 'ethers'
import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts'
import {
  SmartAccountFactory__factory,
  SmartAccount__factory,
  SmartAccount as SmartAccountImpl,
  SmartAccountFactory,
} from '../types'
import {
  BundlerJsonRpcProvider,
  IPresetBuilderOpts,
  UserOperationBuilder,
  UserOperationMiddlewareFn,
  Presets,
} from 'userop'
import { BytesLike } from 'ethers'

export const ERC4337 = {
  EntryPoint: '0x7873addD5b8537b236d53bA195493890c65A887C',
  Factory: '0x8a204086f3CefCa2a0BAE208F35576AF719dE884',
}

export interface Signer {
  address(): string
  data(): Promise<BytesLike>
  sign(opHash: string): Promise<string>
}

export const Signature =
  (signer: Signer): UserOperationMiddlewareFn =>
  async (ctx) => {
    ctx.op.signature = await signer.sign(ctx.getUserOpHash())
  }

export class SmartAccount extends UserOperationBuilder {
  private signer: Signer
  private provider: ethers.providers.JsonRpcProvider
  private entryPoint: EntryPoint
  private factory: SmartAccountFactory
  private initCode: string
  proxy: SmartAccountImpl

  private constructor(signer: Signer, rpcUrl: string, opts?: IPresetBuilderOpts) {
    super()
    this.signer = signer
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(opts?.overrideBundlerRpc)
    this.entryPoint = EntryPoint__factory.connect(opts?.entryPoint || ERC4337.EntryPoint, this.provider)
    this.factory = SmartAccountFactory__factory.connect(opts?.factory || ERC4337.Factory, this.provider)
    this.initCode = '0x'
    this.proxy = SmartAccount__factory.connect(ethers.constants.AddressZero, this.provider)
  }

  private resolveAccount: UserOperationMiddlewareFn = async (ctx) => {
    ctx.op.nonce = await this.entryPoint.getNonce(ctx.op.sender, 0)
    ctx.op.initCode = ctx.op.nonce.eq(0) ? this.initCode : '0x'
  }

  public static async init(signer: Signer, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<SmartAccount> {
    const instance = new SmartAccount(signer, rpcUrl, opts)

    try {
      instance.initCode = ethers.utils.hexConcat([
        instance.factory.address,
        instance.factory.interface.encodeFunctionData('createAccount', [
          [signer.address()],
          [await signer.data()],
          ethers.BigNumber.from(opts?.salt ?? 0),
        ]),
      ])
      await instance.entryPoint.callStatic.getSenderAddress(instance.initCode)

      throw new Error('getSenderAddress: unexpected result')
    } catch (error: any) {
      const addr = error?.errorArgs?.sender
      if (!addr) throw error

      instance.proxy = SmartAccount__factory.connect(addr, instance.provider)
    }

    const base = instance
      .useDefaults({
        sender: instance.proxy.address,
        signature: await instance.signer.sign(ethers.utils.keccak256('0xdead')),
      })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(Presets.Middleware.getGasPrice(instance.provider))

    const withPM = opts?.paymasterMiddleware
      ? base.useMiddleware(opts.paymasterMiddleware)
      : base.useMiddleware(Presets.Middleware.estimateUserOperationGas(instance.provider))

    return withPM.useMiddleware(Signature(instance.signer))
  }

  execute(to: string, value: ethers.BigNumberish, data: ethers.BytesLike) {
    return this.setCallData(this.proxy.interface.encodeFunctionData('execute', [to, value, data]))
  }

  executeBatch(to: Array<string>, values: Array<ethers.BigNumberish>, data: Array<ethers.BytesLike>) {
    return this.setCallData(this.proxy.interface.encodeFunctionData('executeBatch', [to, values, data]))
  }
}
