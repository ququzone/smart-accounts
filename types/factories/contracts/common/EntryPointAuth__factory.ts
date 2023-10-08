/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  EntryPointAuth,
  EntryPointAuthInterface,
} from "../../../contracts/common/EntryPointAuth";

const _abi = [
  {
    inputs: [],
    name: "CallerNotEntryPoint",
    type: "error",
  },
] as const;

export class EntryPointAuth__factory {
  static readonly abi = _abi;
  static createInterface(): EntryPointAuthInterface {
    return new utils.Interface(_abi) as EntryPointAuthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EntryPointAuth {
    return new Contract(address, _abi, signerOrProvider) as EntryPointAuth;
  }
}