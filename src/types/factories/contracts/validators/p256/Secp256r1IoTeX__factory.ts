/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type { Secp256r1IoTeX, Secp256r1IoTeXInterface } from '../../../../contracts/validators/p256/Secp256r1IoTeX'

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'message',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'publicKey',
        type: 'bytes',
      },
    ],
    name: 'validateSignature',
    outputs: [
      {
        internalType: 'bool',
        name: 'result',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const

const _bytecode =
  '0x608080604052346100165761012d908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b6000803560e01c63ae7e17f01461002857600080fd5b346100cc5760603660031901126100cc5767ffffffffffffffff6024358181116100d35761005a9036906004016100d7565b916044359081116100cf5761008461007961008f9236906004016100d7565b93909481019061010a565b93909281019061010a565b92909160043560805260a05260c052600160fa1b60e05260e1526101015260018160a160806180015afa156100cc57516040519015158152602090f35b80fd5b8380fd5b8280fd5b9181601f840112156101055782359167ffffffffffffffff8311610105576020838186019501011161010557565b600080fd5b919082604091031261010557602082359201359056fea164736f6c6343000813000a'

type Secp256r1IoTeXConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (xs: Secp256r1IoTeXConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1

export class Secp256r1IoTeX__factory extends ContractFactory {
  constructor(...args: Secp256r1IoTeXConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Secp256r1IoTeX> {
    return super.deploy(overrides || {}) as Promise<Secp256r1IoTeX>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): Secp256r1IoTeX {
    return super.attach(address) as Secp256r1IoTeX
  }
  override connect(signer: Signer): Secp256r1IoTeX__factory {
    return super.connect(signer) as Secp256r1IoTeX__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): Secp256r1IoTeXInterface {
    return new utils.Interface(_abi) as Secp256r1IoTeXInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Secp256r1IoTeX {
    return new Contract(address, _abi, signerOrProvider) as Secp256r1IoTeX
  }
}
