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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export type UserOperationStruct = {
  sender: string;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGasLimit: BigNumberish;
  verificationGasLimit: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymasterAndData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface SmartAccountInterface extends utils.Interface {
  functions: {
    "addDeposit()": FunctionFragment;
    "addHook(address,bytes)": FunctionFragment;
    "addRecoveror(address,bytes)": FunctionFragment;
    "disableValidator(address,address)": FunctionFragment;
    "enableValidator(address,bytes)": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "execute(address,uint256,bytes)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "getFallbackHandler()": FunctionFragment;
    "getNonce()": FunctionFragment;
    "getRecoverorsPaginated(address,uint256)": FunctionFragment;
    "getValidatorsPaginated(address,uint256)": FunctionFragment;
    "initialize(address,address[],bytes[])": FunctionFragment;
    "isRecoverorEnabled(address)": FunctionFragment;
    "isValidatorEnabled(address)": FunctionFragment;
    "recovery(address,bytes)": FunctionFragment;
    "removeHook(address,address,address)": FunctionFragment;
    "removeRecoveror(address,address)": FunctionFragment;
    "setFallbackHandler(address)": FunctionFragment;
    "sudo(address,uint256,bytes)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "withdrawDepositTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDeposit"
      | "addHook"
      | "addRecoveror"
      | "disableValidator"
      | "enableValidator"
      | "entryPoint"
      | "execute"
      | "executeBatch"
      | "getDeposit"
      | "getFallbackHandler"
      | "getNonce"
      | "getRecoverorsPaginated"
      | "getValidatorsPaginated"
      | "initialize"
      | "isRecoverorEnabled"
      | "isValidatorEnabled"
      | "recovery"
      | "removeHook"
      | "removeRecoveror"
      | "setFallbackHandler"
      | "sudo"
      | "validateUserOp"
      | "withdrawDepositTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addHook",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "addRecoveror",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "disableValidator",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableValidator",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [string[], BigNumberish[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFallbackHandler",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRecoverorsPaginated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getValidatorsPaginated",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isRecoverorEnabled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidatorEnabled",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "recovery",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeHook",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRecoveror",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFallbackHandler",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "sudo",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [UserOperationStruct, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDepositTo",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addRecoveror",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFallbackHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRecoverorsPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getValidatorsPaginated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRecoverorEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidatorEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "recovery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeRecoveror",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFallbackHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sudo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDepositTo",
    data: BytesLike
  ): Result;

  events: {
    "AddedRecoveror(address)": EventFragment;
    "ChangedFallbackHandler(address,address)": EventFragment;
    "DisabledValidator(address)": EventFragment;
    "EnabledValidator(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "InstalledHook(address)": EventFragment;
    "RemovedRecoveror(address)": EventFragment;
    "UninstalledHook(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedRecoveror"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangedFallbackHandler"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DisabledValidator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EnabledValidator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InstalledHook"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedRecoveror"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UninstalledHook"): EventFragment;
}

export interface AddedRecoverorEventObject {
  recoveror: string;
}
export type AddedRecoverorEvent = TypedEvent<
  [string],
  AddedRecoverorEventObject
>;

export type AddedRecoverorEventFilter = TypedEventFilter<AddedRecoverorEvent>;

export interface ChangedFallbackHandlerEventObject {
  previousHandler: string;
  handler: string;
}
export type ChangedFallbackHandlerEvent = TypedEvent<
  [string, string],
  ChangedFallbackHandlerEventObject
>;

export type ChangedFallbackHandlerEventFilter =
  TypedEventFilter<ChangedFallbackHandlerEvent>;

export interface DisabledValidatorEventObject {
  validator: string;
}
export type DisabledValidatorEvent = TypedEvent<
  [string],
  DisabledValidatorEventObject
>;

export type DisabledValidatorEventFilter =
  TypedEventFilter<DisabledValidatorEvent>;

export interface EnabledValidatorEventObject {
  validator: string;
}
export type EnabledValidatorEvent = TypedEvent<
  [string],
  EnabledValidatorEventObject
>;

export type EnabledValidatorEventFilter =
  TypedEventFilter<EnabledValidatorEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface InstalledHookEventObject {
  hook: string;
}
export type InstalledHookEvent = TypedEvent<[string], InstalledHookEventObject>;

export type InstalledHookEventFilter = TypedEventFilter<InstalledHookEvent>;

export interface RemovedRecoverorEventObject {
  recoveror: string;
}
export type RemovedRecoverorEvent = TypedEvent<
  [string],
  RemovedRecoverorEventObject
>;

export type RemovedRecoverorEventFilter =
  TypedEventFilter<RemovedRecoverorEvent>;

export interface UninstalledHookEventObject {
  hook: string;
}
export type UninstalledHookEvent = TypedEvent<
  [string],
  UninstalledHookEventObject
>;

export type UninstalledHookEventFilter = TypedEventFilter<UninstalledHookEvent>;

export interface SmartAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SmartAccountInterface;

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
    addDeposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    addHook(
      hook: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    disableValidator(
      prevValidator: string,
      validator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    execute(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    executeBatch(
      dest: string[],
      value: BigNumberish[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFallbackHandler(
      overrides?: CallOverrides
    ): Promise<[string] & { _handler: string }>;

    getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    initialize(
      defalutCallbackHandler: string,
      validators: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    isRecoverorEnabled(
      recoveror: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    recovery(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeHook(
      prevBeforeHook: string,
      prevAfterHook: string,
      hook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sudo(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  addDeposit(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  addHook(
    hook: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addRecoveror(
    recoveror: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  disableValidator(
    prevValidator: string,
    validator: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  enableValidator(
    validator: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  execute(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  executeBatch(
    dest: string[],
    value: BigNumberish[],
    func: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  getFallbackHandler(overrides?: CallOverrides): Promise<string>;

  getNonce(overrides?: CallOverrides): Promise<BigNumber>;

  getRecoverorsPaginated(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], string] & { array: string[]; next: string }>;

  getValidatorsPaginated(
    start: string,
    pageSize: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string[], string] & { array: string[]; next: string }>;

  initialize(
    defalutCallbackHandler: string,
    validators: string[],
    data: BytesLike[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  isRecoverorEnabled(
    recoveror: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isValidatorEnabled(
    validator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  recovery(
    validator: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeHook(
    prevBeforeHook: string,
    prevAfterHook: string,
    hook: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  removeRecoveror(
    prevRecoveror: string,
    recoveror: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFallbackHandler(
    handler: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sudo(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: BytesLike,
    missingAccountFunds: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawDepositTo(
    withdrawAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDeposit(overrides?: CallOverrides): Promise<void>;

    addHook(
      hook: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    disableValidator(
      prevValidator: string,
      validator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    execute(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      dest: string[],
      value: BigNumberish[],
      func: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getFallbackHandler(overrides?: CallOverrides): Promise<string>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[], string] & { array: string[]; next: string }>;

    initialize(
      defalutCallbackHandler: string,
      validators: string[],
      data: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    isRecoverorEnabled(
      recoveror: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    recovery(
      validator: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    removeHook(
      prevBeforeHook: string,
      prevAfterHook: string,
      hook: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFallbackHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<void>;

    sudo(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddedRecoveror(address)"(recoveror?: null): AddedRecoverorEventFilter;
    AddedRecoveror(recoveror?: null): AddedRecoverorEventFilter;

    "ChangedFallbackHandler(address,address)"(
      previousHandler?: string | null,
      handler?: string | null
    ): ChangedFallbackHandlerEventFilter;
    ChangedFallbackHandler(
      previousHandler?: string | null,
      handler?: string | null
    ): ChangedFallbackHandlerEventFilter;

    "DisabledValidator(address)"(
      validator?: null
    ): DisabledValidatorEventFilter;
    DisabledValidator(validator?: null): DisabledValidatorEventFilter;

    "EnabledValidator(address)"(validator?: null): EnabledValidatorEventFilter;
    EnabledValidator(validator?: null): EnabledValidatorEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "InstalledHook(address)"(hook?: string | null): InstalledHookEventFilter;
    InstalledHook(hook?: string | null): InstalledHookEventFilter;

    "RemovedRecoveror(address)"(recoveror?: null): RemovedRecoverorEventFilter;
    RemovedRecoveror(recoveror?: null): RemovedRecoverorEventFilter;

    "UninstalledHook(address)"(
      hook?: string | null
    ): UninstalledHookEventFilter;
    UninstalledHook(hook?: string | null): UninstalledHookEventFilter;
  };

  estimateGas: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    addHook(
      hook: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    disableValidator(
      prevValidator: string,
      validator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    executeBatch(
      dest: string[],
      value: BigNumberish[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getFallbackHandler(overrides?: CallOverrides): Promise<BigNumber>;

    getNonce(overrides?: CallOverrides): Promise<BigNumber>;

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      defalutCallbackHandler: string,
      validators: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    isRecoverorEnabled(
      recoveror: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recovery(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeHook(
      prevBeforeHook: string,
      prevAfterHook: string,
      hook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sudo(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addHook(
      hook: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addRecoveror(
      recoveror: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    disableValidator(
      prevValidator: string,
      validator: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    enableValidator(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      dest: string[],
      value: BigNumberish[],
      func: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFallbackHandler(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRecoverorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValidatorsPaginated(
      start: string,
      pageSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      defalutCallbackHandler: string,
      validators: string[],
      data: BytesLike[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    isRecoverorEnabled(
      recoveror: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidatorEnabled(
      validator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recovery(
      validator: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeHook(
      prevBeforeHook: string,
      prevAfterHook: string,
      hook: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    removeRecoveror(
      prevRecoveror: string,
      recoveror: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFallbackHandler(
      handler: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sudo(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: BytesLike,
      missingAccountFunds: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawDepositTo(
      withdrawAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
