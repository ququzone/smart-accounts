import { expect } from 'chai'
import { ethers } from 'hardhat'

import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts'
import { ECDSAValidator, SmartAccountFactory } from '../types'

export async function deployEntryPoint(provider = ethers.provider): Promise<EntryPoint> {
  const factory = new ethers.ContractFactory(
    EntryPoint__factory.abi,
    EntryPoint__factory.bytecode,
    await provider.getSigner(),
  )
  const ep = await factory.deploy()
  return EntryPoint__factory.connect(await ep.getAddress(), await provider.getSigner())
}

describe('Smart Account tests', () => {
  let entryPoint: EntryPoint
  let accountFactory: SmartAccountFactory
  let accounts: any

  before(async () => {
    accounts = await ethers.getSigners()
    entryPoint = await deployEntryPoint()

    const handler = await (await ethers.getContractFactory('DefaultCallbackHandler')).deploy()
    accountFactory = (await (
      await ethers.getContractFactory('SmartAccountFactory')
    ).deploy(entryPoint.target, handler.target)) as unknown as SmartAccountFactory
  })

  describe('ECDSA validator account', () => {
    let owner: string
    let validator: ECDSAValidator

    before(async () => {
      owner = accounts[0].address
      validator = (await (await ethers.getContractFactory('ECDSAValidator')).deploy()) as unknown as ECDSAValidator
    })

    it('create account use factory', async () => {
      // @ts-ignore
      const account = await accountFactory['getAddress(address[],bytes[],uint256)']([validator.target], [owner], 0)
      expect(await ethers.provider.getCode(account)).to.equal('0x')

      await accountFactory.createAccount([validator.target], [owner], 0)
      expect(ethers.provider.getCode(account)).not.to.equal('0x')
    })

    it('create account use userop', async () => {
      // @ts-ignore
      const account = await accountFactory['getAddress(address[],bytes[],uint256)']([validator.target], [owner], 1)
      expect(await ethers.provider.getCode(account)).to.equal('0x')
    })
  })
})
