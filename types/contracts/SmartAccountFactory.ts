/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SmartAccountFactoryInterface extends Interface {
  getFunction(
    nameOrSignature:
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
    values: [AddressLike[], BytesLike[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [AddressLike[], BytesLike[], BigNumberish]
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
}

export interface SmartAccountFactory extends BaseContract {
  connect(runner?: ContractRunner | null): SmartAccountFactory;
  waitForDeployment(): Promise<this>;

  interface: SmartAccountFactoryInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  accountImplementation: TypedContractMethod<[], [string], "view">;

  createAccount: TypedContractMethod<
    [validators: AddressLike[], data: BytesLike[], salt: BigNumberish],
    [string],
    "nonpayable"
  >;

  getAddress: TypedContractMethod<
    [validators: AddressLike[], data: BytesLike[], salt: BigNumberish],
    [string],
    "view"
  >;

  handler: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "accountImplementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "createAccount"
  ): TypedContractMethod<
    [validators: AddressLike[], data: BytesLike[], salt: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAddress"
  ): TypedContractMethod<
    [validators: AddressLike[], data: BytesLike[], salt: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "handler"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
