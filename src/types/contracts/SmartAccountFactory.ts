/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface SmartAccountFactoryInterface extends utils.Interface {
  functions: {
    "accountImplementation()": FunctionFragment;
    "createAccount(address[],bytes[],uint256)": FunctionFragment;
    "getAddress(address[],bytes[],uint256)": FunctionFragment;
    "handler()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accountImplementation"
      | "createAccount"
      | "getAddress"
      | "handler"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accountImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createAccount",
    values: [string[], BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [string[], BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "handler", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "accountImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "handler", data: BytesLike): Result;

  events: {};
}

export interface SmartAccountFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SmartAccountFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accountImplementation(overrides?: CallOverrides): Promise<[string]>;

    createAccount(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAddress(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    handler(overrides?: CallOverrides): Promise<[string]>;
  };

  accountImplementation(overrides?: CallOverrides): Promise<string>;

  createAccount(
    validators: string[],
    data: BytesLike[],
    salt: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAddress(
    validators: string[],
    data: BytesLike[],
    salt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  handler(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    accountImplementation(overrides?: CallOverrides): Promise<string>;

    createAccount(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getAddress(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    handler(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    createAccount(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAddress(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    handler(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    accountImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createAccount(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAddress(
      validators: string[],
      data: BytesLike[],
      salt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    handler(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
