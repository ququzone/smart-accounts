import { expect } from 'chai'
import { ethers } from 'hardhat'

import { EntryPoint, EntryPoint__factory } from '@account-abstraction/contracts'
import { EcdsaValidator, SmartAccountFactory } from '../types'

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
  let accounts: any

  before(async () => {
    accounts = await ethers.getSigners()
    entryPoint = await deployEntryPoint()

    const handler = await (await ethers.getContractFactory('DefaultCallbackHandler')).deploy()
    accountFactory = (await (
      await ethers.getContractFactory('SmartAccountFactory')
    ).deploy(entryPoint.address, handler.address)) as SmartAccountFactory
  })

  describe('ECDSA validator account', () => {
    let owner: string
    let validator: EcdsaValidator

    before(async () => {
      owner = accounts[0].address
      validator = (await (await ethers.getContractFactory('ECDSAValidator')).deploy()) as EcdsaValidator
    })

    it('create account use factory', async () => {
      const account = await accountFactory.getAddress([validator.address], [owner], 0)
      expect(await ethers.provider.getCode(account)).to.equal('0x')

      await accountFactory.createAccount([validator.address], [owner], 0)
      expect(ethers.provider.getCode(account)).not.to.equal('0x')
      expect(await validator.owner(account)).to.equal(owner)
    })

    it('create account use userop', async () => {
      const account = await accountFactory.getAddress([validator.address], [owner], 1)
      expect(await ethers.provider.getCode(account)).to.equal('0x')
    })
  })
})
