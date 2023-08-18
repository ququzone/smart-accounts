import { expect } from 'chai'
import { ethers } from 'hardhat'

import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts'
import { EcdsaValidator, SmartAccountFactory } from '../types'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { UserOperationBuilder, UserOperationMiddlewareCtx } from 'userop'
import { getGasPrice } from 'userop/dist/preset/middleware'

export async function deployEntryPoint(provider = ethers.provider): Promise<EntryPoint> {
  const factory = new ethers.ContractFactory(
    EntryPoint__factory.abi,
    EntryPoint__factory.bytecode,
    provider.getSigner(),
  )
  return (await factory.deploy()) as EntryPoint
}

describe('Smart Account tests', () => {
  let entryPoint: EntryPoint
  let accountFactory: SmartAccountFactory
  let accounts: SignerWithAddress[]
  let beneficiary: SignerWithAddress

  before(async () => {
    accounts = await ethers.getSigners()
    beneficiary = accounts[1]
    entryPoint = await deployEntryPoint()

    const handler = await (await ethers.getContractFactory('DefaultCallbackHandler')).deploy()
    accountFactory = (await (
      await ethers.getContractFactory('SmartAccountFactory')
    ).deploy(entryPoint.address, handler.address)) as SmartAccountFactory
  })

  describe('ECDSA validator account', () => {
    let owner: SignerWithAddress
    let validator: EcdsaValidator

    before(async () => {
      owner = accounts[0]
      validator = (await (await ethers.getContractFactory('ECDSAValidator')).deploy()) as EcdsaValidator
    })

    it('create account use factory', async () => {
      const account = await accountFactory.getAddress([validator.address], [owner.address], 0)
      expect(await ethers.provider.getCode(account)).to.equal('0x')

      await accountFactory.createAccount([validator.address], [owner.address], 0)
      expect(ethers.provider.getCode(account)).not.to.equal('0x')
      expect(await validator.owner(account)).to.equal(owner.address)
    })

    it('create account use userop', async () => {
      const account = await accountFactory.getAddress([validator.address], [owner.address], 1)
      expect(await ethers.provider.getCode(account)).to.equal('0x')

      const {chainId} = await ethers.provider.getNetwork()
      const builder = new UserOperationBuilder()
      builder.useMiddleware(getGasPrice(ethers.provider))
      builder.setSender(account)
      builder.setInitCode(ethers.utils.hexConcat([
        accountFactory.address,
        accountFactory.interface.encodeFunctionData('createAccount', [
          [validator.address],
          [owner.address],
          1,
        ]),
      ]))
      builder.setVerificationGasLimit(350000)
      const op = await builder.buildOp(entryPoint.address, chainId)
      const ctx = new UserOperationMiddlewareCtx(op, entryPoint.address, chainId)
      const signature = await owner.signMessage(ethers.utils.arrayify(ctx.getUserOpHash()))
      ctx.op.signature = ethers.utils.defaultAbiCoder.encode(['address', 'bytes'], [validator.address, signature])

      // deposit gas
      await owner.sendTransaction({to: account, value: ethers.utils.parseEther('10')})

      await entryPoint.handleOps([ctx.op], beneficiary.address)
      expect(ethers.provider.getCode(account)).not.to.equal('0x')
      expect(await validator.owner(account)).to.equal(owner.address)
    })
  })
})
