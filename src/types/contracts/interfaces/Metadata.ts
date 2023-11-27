/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from 'ethers'
import type { FunctionFragment, Result } from '@ethersproject/abi'
import type { Listener, Provider } from '@ethersproject/providers'
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../common'

export interface MetadataInterface extends utils.Interface {
  functions: {
    'NAME()': FunctionFragment
    'VERSION()': FunctionFragment
    'supportsInterface(bytes4)': FunctionFragment
  }

  getFunction(nameOrSignatureOrTopic: 'NAME' | 'VERSION' | 'supportsInterface'): FunctionFragment

  encodeFunctionData(functionFragment: 'NAME', values?: undefined): string
  encodeFunctionData(functionFragment: 'VERSION', values?: undefined): string
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string

  decodeFunctionResult(functionFragment: 'NAME', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'VERSION', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result

  events: {}
}

export interface Metadata extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: MetadataInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    NAME(overrides?: CallOverrides): Promise<[string]>

    VERSION(overrides?: CallOverrides): Promise<[string]>

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>
  }

  NAME(overrides?: CallOverrides): Promise<string>

  VERSION(overrides?: CallOverrides): Promise<string>

  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>

  callStatic: {
    NAME(overrides?: CallOverrides): Promise<string>

    VERSION(overrides?: CallOverrides): Promise<string>

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>
  }

  filters: {}

  estimateGas: {
    NAME(overrides?: CallOverrides): Promise<BigNumber>

    VERSION(overrides?: CallOverrides): Promise<BigNumber>

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>

    VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>

    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}