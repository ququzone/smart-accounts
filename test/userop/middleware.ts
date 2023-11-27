import * as ethers from 'ethers';
import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts';
import {
  SmartAccountFactory__factory,
  SmartAccount__factory,
  SmartAccount as SmartAccountImpl,
  SmartAccountFactory,
} from '../../src/types';
import {
  BundlerJsonRpcProvider,
  IPresetBuilderOpts,
  UserOperationBuilder,
  UserOperationMiddlewareFn,
  Presets,
} from 'userop';

export interface ECDSASigner {
  signer: ethers.Signer;
  validator: string;
}

export const ECDSASignature =
  (signer: ECDSASigner): UserOperationMiddlewareFn =>
  async ctx => {
    const signature = await signer.signer.signMessage(ethers.utils.arrayify(ctx.getUserOpHash()));
    ctx.op.signature = ethers.utils.defaultAbiCoder.encode(['address', 'bytes'], [signer.validator, signature]);
  };

export class SmartAccount extends UserOperationBuilder {
  private signer: ECDSASigner;
  private provider: ethers.providers.JsonRpcProvider;
  private entryPoint: EntryPoint;
  private factory: SmartAccountFactory;
  private initCode: string;
  proxy: SmartAccountImpl;

  private constructor(signer: ECDSASigner, rpcUrl: string, opts?: IPresetBuilderOpts) {
    super();
    this.signer = signer;
    this.provider = new BundlerJsonRpcProvider(rpcUrl).setBundlerRpc(opts?.overrideBundlerRpc);
    this.entryPoint = EntryPoint__factory.connect(opts?.entryPoint!, this.provider);
    this.factory = SmartAccountFactory__factory.connect(opts?.factory!, this.provider);
    this.initCode = '0x';
    this.proxy = SmartAccount__factory.connect(ethers.constants.AddressZero, this.provider);
  }

  private resolveAccount: UserOperationMiddlewareFn = async ctx => {
    ctx.op.nonce = await this.entryPoint.getNonce(ctx.op.sender, 0);
    ctx.op.initCode = ctx.op.nonce.eq(0) ? this.initCode : '0x';
  };

  public static async init(signer: ECDSASigner, rpcUrl: string, opts?: IPresetBuilderOpts): Promise<SmartAccount> {
    const instance = new SmartAccount(signer, rpcUrl, opts);

    try {
      instance.initCode = ethers.utils.hexConcat([
        instance.factory.address,
        // @ts-ignore
        instance.factory.interface.encodeFunctionData('createAccount', [
          [signer.validator],
          [await signer.signer.getAddress()],
          ethers.BigNumber.from(opts?.salt ?? 0),
        ]),
      ]);
      await instance.entryPoint.callStatic.getSenderAddress(instance.initCode);

      throw new Error('getSenderAddress: unexpected result');
    } catch (error: any) {
      const addr = error?.errorArgs?.sender;
      if (!addr) throw error;

      instance.proxy = SmartAccount__factory.connect(addr, instance.provider);
    }

    const base = instance
      .useDefaults({
        sender: instance.proxy.address,
        signature: ethers.utils.defaultAbiCoder.encode(
          ['address', 'bytes'],
          [ethers.constants.AddressZero, `0x${'0'.repeat(65)}`],
        ),
      })
      .useMiddleware(instance.resolveAccount)
      .useMiddleware(Presets.Middleware.getGasPrice(instance.provider));

    const withPM = opts?.paymasterMiddleware
      ? base.useMiddleware(opts.paymasterMiddleware)
      : base.useMiddleware(Presets.Middleware.estimateUserOperationGas(instance.provider));

    return withPM.useMiddleware(ECDSASignature(instance.signer));
  }

  execute(to: string, value: ethers.BigNumberish, data: ethers.BytesLike) {
    return this.setCallData(this.proxy.interface.encodeFunctionData('execute', [to, value, data]));
  }

  executeBatch(to: Array<string>, values: Array<ethers.BigNumberish>, data: Array<ethers.BytesLike>) {
    return this.setCallData(this.proxy.interface.encodeFunctionData('executeBatch', [to, values, data]));
  }
}
