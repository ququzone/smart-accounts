/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
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
    name: "InvalidHook",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongArrayLength",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "InstalledHook",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "UninstalledHook",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "hook",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "addHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "prevBeforeHook",
        type: "address",
      },
      {
        internalType: "address",
        name: "prevAfterHook",
        type: "address",
      },
      {
        internalType: "address",
        name: "hook",
        type: "address",
      },
    ],
    name: "removeHook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    name: "sudo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ExecutionManager__factory {
  static readonly abi = _abi;
  static createInterface(): ExecutionManagerInterface {
    return new utils.Interface(_abi) as ExecutionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExecutionManager {
    return new Contract(address, _abi, signerOrProvider) as ExecutionManager;
  }
}
