/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers'
import type { Provider, TransactionRequest } from '@ethersproject/providers'
import type {
  OwnerSessionKeyValidator,
  OwnerSessionKeyValidatorInterface,
} from '../../../../contracts/validators/sessionkey/OwnerSessionKeyValidator'

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sessionKey',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'validUntil',
        type: 'uint48',
      },
      {
        indexed: false,
        internalType: 'uint48',
        name: 'validAfter',
        type: 'uint48',
      },
    ],
    name: 'NewSessionKey',
    type: 'event',
  },
  {
    inputs: [],
    name: 'NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'enable',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sessionKey',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'sessionKeyStorage',
    outputs: [
      {
        internalType: 'uint48',
        name: 'validUntil',
        type: 'uint48',
      },
      {
        internalType: 'uint48',
        name: 'validAfter',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'validCaller',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'initCode',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'callGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'paymasterAndData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
      {
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'validateSignature',
    outputs: [
      {
        internalType: 'uint256',
        name: 'validationData',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
] as const

const _bytecode =
  '0x6080806040523461001657610851908161001c8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a7146103dd575081630c959556146102465781634dffc323146101e35781639ea9bd591461018a57508063a3f4df7e14610138578063fbab6a7a146100cb5763ffa1ad741461007257600080fd5b346100c757816003193601126100c7576100c39061008e61045c565b90600582527f302e302e3100000000000000000000000000000000000000000000000000000060208301525191829182610492565b0390f35b5080fd5b50346100c757806003193601126100c7576100e4610446565b602435906001600160a01b03908183168093036101345716835260208381528284209184529081529181902054905165ffffffffffff808316825260309290921c90911691810191909152604090f35b8480fd5b50346100c757816003193601126100c7576100c39061015561045c565b90601b82527f4f776e65722053657373696f6e204b65792056616c696461746f72000000000060208301525191829182610492565b9050346101df57816003193601126101df576101a4610446565b926024359067ffffffffffffffff82116101dc5750926101cc6101d392602095369101610413565b50506107f9565b90519015158152f35b80fd5b8280fd5b82846003196060368201126100c75783359167ffffffffffffffff918284116100c7576101609084360301126101dc576044359182116101dc57509261023f9161023260209536908401610413565b92909160243591016104db565b9051908152f35b9050602091826003193601126103d95767ffffffffffffffff9082358281116103d5576102769036908501610413565b939094846014116103d157853560601c9585601a116103cd57601481013560d01c9582116103cd57601a013560d01c938486111561036657835192838501918211848310176103535750835284825280820184815286885287825283882033808a5292528388209251835491516bffffffffffffffffffffffff1990921665ffffffffffff9182161760309290921b6bffffffffffff0000000000001691909117909255915193811684529091166020830152907f31b5c77503fad62fe58a0293e3020e533a464b77d0a29f3495d61c90c09086c790604090a380f35b634e487b7160e01b895260419052602488fd5b50608492519162461bcd60e51b8352820152603760248201527f4f776e657253657373696f6e4b657956616c696461746f723a20696e76616c6960448201527f642076616c6964556e74696c2f76616c696441667465720000000000000000006064820152fd5b8780fd5b8680fd5b8580fd5b8380fd5b8491346101df5760203660031901126101df573563ffffffff60e01b81168091036101df576337f0facb60e21b14815260209150f35b9181601f840112156104415782359167ffffffffffffffff8311610441576020838186019501011161044157565b600080fd5b600435906001600160a01b038216820361044157565b604051906040820182811067ffffffffffffffff82111761047c57604052565b634e487b7160e01b600052604160045260246000fd5b6020808252825181830181905290939260005b8281106104c757505060409293506000838284010152601f8019910116010190565b8181018601518482016040015285016104a5565b909193926000927f19457468657265756d205369676e6564204d6573736167653a0a3332000000008452601c52603c83209067ffffffffffffffff9586821161060a5760405196601f8301601f19908116603f01168801908111888210176105f65760405281875236828201116101345791846020838994610567968361056f9c013784010152610738565b94909461061e565b6001600160a01b038094168252816020526040822090359384168094036100c757604092938252602052205465ffffffffffff8116156105f05760a01b79ffffffffffff00000000000000000000000000000000000000007fffffffffffff0000000000000000000000000000000000000000000000000000821691161790565b50600190565b634e487b7160e01b86526041600452602486fd5b634e487b7160e01b85526041600452602485fd5b6005811015610722578061062f5750565b6001810361067c5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b600281036106c95760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b6003146106d257565b60405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608490fd5b634e487b7160e01b600052602160045260246000fd5b90604181511460001461076657610762916020820151906060604084015193015160001a90610770565b9091565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083116107ed5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa156107e05781516001600160a01b038116156105f0579190565b50604051903d90823e3d90fd5b50505050600090600390565b6001600160a01b036000911681528060205260408120338252602052604081205465ffffffffffff90818160301c1642111561083f5716421161083c5750600190565b90565b50509056fea164736f6c6343000813000a'

type OwnerSessionKeyValidatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: OwnerSessionKeyValidatorConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class OwnerSessionKeyValidator__factory extends ContractFactory {
  constructor(...args: OwnerSessionKeyValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<OwnerSessionKeyValidator> {
    return super.deploy(overrides || {}) as Promise<OwnerSessionKeyValidator>
  }
  override getDeployTransaction(overrides?: Overrides & { from?: string }): TransactionRequest {
    return super.getDeployTransaction(overrides || {})
  }
  override attach(address: string): OwnerSessionKeyValidator {
    return super.attach(address) as OwnerSessionKeyValidator
  }
  override connect(signer: Signer): OwnerSessionKeyValidator__factory {
    return super.connect(signer) as OwnerSessionKeyValidator__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): OwnerSessionKeyValidatorInterface {
    return new utils.Interface(_abi) as OwnerSessionKeyValidatorInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OwnerSessionKeyValidator {
    return new Contract(address, _abi, signerOrProvider) as OwnerSessionKeyValidator
  }
}
