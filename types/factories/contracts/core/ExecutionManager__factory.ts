/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ExecutionManager,
  ExecutionManagerInterface,
} from "../../../contracts/core/ExecutionManager";

const _abi = [
  {
    inputs: [],
    name: "CallerNotEntryPoint",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerNotSelf",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongArrayLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ExecutionManager__factory {
  static readonly abi = _abi;
  static createInterface(): ExecutionManagerInterface {
    return new Interface(_abi) as ExecutionManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExecutionManager {
    return new Contract(address, _abi, runner) as unknown as ExecutionManager;
  }
}