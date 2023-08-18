/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MetadataInterface extends ethers.utils.Interface {
  functions: {
    "NAME()": FunctionFragment;
    "VERSION()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "VERSION", values?: undefined): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "VERSION", data: BytesLike): Result;

  events: {};
}

export class Metadata extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MetadataInterface;

  functions: {
    NAME(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "NAME()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    VERSION(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "VERSION()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  NAME(overrides?: CallOverrides): Promise<string>;

  "NAME()"(overrides?: CallOverrides): Promise<string>;

  VERSION(overrides?: CallOverrides): Promise<string>;

  "VERSION()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>;

    "NAME()"(overrides?: CallOverrides): Promise<string>;

    VERSION(overrides?: CallOverrides): Promise<string>;

    "VERSION()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>;

    "NAME()"(overrides?: CallOverrides): Promise<BigNumber>;

    VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    "VERSION()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "NAME()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "VERSION()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
