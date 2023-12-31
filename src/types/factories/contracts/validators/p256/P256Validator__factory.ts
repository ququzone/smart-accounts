/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  P256Validator,
  P256ValidatorInterface,
} from "../../../../contracts/validators/p256/P256Validator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ISecp256r1",
        name: "_impl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "oldPk",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "newPk",
        type: "bytes",
      },
    ],
    name: "PkChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "enable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "impl",
    outputs: [
      {
        internalType: "contract ISecp256r1",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pks",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "validCaller",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignature",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a03461007157601f61090038819003918201601f19168301916001600160401b038311848410176100765780849260209460405283398101031261007157516001600160a01b038116810361007157608052604051610873908161008d823960805181818161022b01526107790152f35b600080fd5b634e487b7160e01b600052604160045260246000fdfe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610487575081630c959556146102b25781634dffc3231461024f5781638abf60771461020b5781639356375c146101c05781639ea9bd591461013c57508063a3f4df7e146100e05763ffa1ad741461007d57600080fd5b346100dc57816003193601126100dc5780516100d89161009c82610540565b600582527f302e302e3100000000000000000000000000000000000000000000000000000060208301525191829160208352602083019061065d565b0390f35b5080fd5b50346100dc57816003193601126100dc5780516100d89161010082610540565b600e82527f503235362056616c696461746f7200000000000000000000000000000000000060208301525191829160208352602083019061065d565b905082346101bd57826003193601126101bd576101576104f0565b506024359067ffffffffffffffff82116101bd575060649261017e602092369085016104bd565b50505162461bcd60e51b815291820152600f60248201527f6e6f7420696d706c656d656e74656400000000000000000000000000000000006044820152fd5b80fd5b5050346100dc5760203660031901126100dc576101f8816100d8936001600160a01b036101eb6104f0565b1681528060205220610594565b905191829160208352602083019061065d565b5050346100dc57816003193601126100dc57602090516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b82846003196060368201126100dc5783359167ffffffffffffffff918284116100dc576101609084360301126101bd576044359182116101bd5750926102ab9161029e602095369084016104bd565b92909160243591016106a3565b9051908152f35b8383602092836003193601126104835767ffffffffffffffff91813583811161047f576102e290369084016104bd565b90933386528587526102f5838720610594565b9333875286885283872091831161046c57506103118154610506565b601f8111610429575b5085601f83116001146103a057918697918161038f947f49a125229beaa1b288f0f807170a37c7a131925683b0250b113db84181bfb066989991610395575b508260011b906000198460031b1c19161790555b610380845195858796875286019061065d565b91848303908501523396610682565b0390a280f35b90508801358a610359565b81875287872090601f198416885b8181106104125750917f49a125229beaa1b288f0f807170a37c7a131925683b0250b113db84181bfb06697989993918561038f9694106103f8575b5050600182811b01905561036d565b890135600019600385901b60f8161c1916905589806103e9565b91928a60018192868c0135815501940192016103ae565b818752878720601f840160051c810191898510610462575b601f0160051c01905b818110610457575061031a565b87815560010161044a565b9091508190610441565b634e487b7160e01b875260419052602486fd5b8480fd5b8280fd5b849134610483576020366003190112610483573563ffffffff60e01b8116809103610483576337f0facb60e21b14815260209150f35b9181601f840112156104eb5782359167ffffffffffffffff83116104eb57602083818601950101116104eb57565b600080fd5b600435906001600160a01b03821682036104eb57565b90600182811c92168015610536575b602083101461052057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610515565b6040810190811067ffffffffffffffff82111761055c57604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff82111761055c57604052565b90604051918260008254926105a884610506565b90818452600194858116908160001461061757506001146105d4575b50506105d292500383610572565b565b9093915060005260209081600020936000915b8183106105ff5750506105d2935082010138806105c4565b855488840185015294850194879450918301916105e7565b9150506105d294506020925060ff191682840152151560051b82010138806105c4565b60005b83811061064d5750506000910152565b818101518382015260200161063d565b906020916106768151809281855285808601910161063a565b601f01601f1916010190565b908060209392818452848401376000828201840152601f01601f1916010190565b909192604091825194602086818098019687528181526106c281610540565b6106d386519788925192839161063a565b8660009788928101039060025afa156108595784519135906001600160a01b0391828116809103610855579187939184938852878452610735878920918851978895630ae7e17f60e41b87526004870152606060248701526064860191610682565b90600319848303016044850152889181549161075083610506565b928383528660019d8e83169283600014610835575050506001146107f9575b50505082809103917f0000000000000000000000000000000000000000000000000000000000000000165afa9283156107f0575083926107b9575b50506107b4575090565b905090565b90809250813d83116107e9575b6107d08183610572565b810103126100dc575180151581036100dc5738806107aa565b503d6107c6565b513d85823e3d90fd5b909192508952848920918a8a935b82851061081c5750505001830182803861076f565b805484860189015288978a9750909401938c9101610807565b9196509392508594915060ff191683830152151560051b0101913861076f565b8680fd5b50505051903d90823e3d90fdfea164736f6c6343000813000a";

type P256ValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: P256ValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class P256Validator__factory extends ContractFactory {
  constructor(...args: P256ValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _impl: string,
    overrides?: Overrides & { from?: string }
  ): Promise<P256Validator> {
    return super.deploy(_impl, overrides || {}) as Promise<P256Validator>;
  }
  override getDeployTransaction(
    _impl: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_impl, overrides || {});
  }
  override attach(address: string): P256Validator {
    return super.attach(address) as P256Validator;
  }
  override connect(signer: Signer): P256Validator__factory {
    return super.connect(signer) as P256Validator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): P256ValidatorInterface {
    return new utils.Interface(_abi) as P256ValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): P256Validator {
    return new Contract(address, _abi, signerOrProvider) as P256Validator;
  }
}
