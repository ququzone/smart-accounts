import crypto from 'crypto'
import { bufferToHex, sha256 } from 'ethereumjs-util'
import { BytesLike, defaultAbiCoder } from 'ethers/lib/utils'
import { Signer } from './userop-builder'

// @ts-ignore
export const sign = (keyPair: any, message: any) => {
  const messageHash = bufferToHex(sha256(message))

  const signer = crypto.createSign('RSA-SHA256')
  signer.update(message)
  let sigString = signer.sign(keyPair.encodePrivateKey(), 'hex')

  // @ts-ignore
  const xlength = 2 * ('0x' + sigString.slice(6, 8))
  sigString = sigString.slice(8)
  const signatureArray = ['0x' + sigString.slice(0, xlength), '0x' + sigString.slice(xlength + 4)]
  const signature = defaultAbiCoder.encode(['uint256', 'uint256'], [signatureArray[0], signatureArray[1]])

  return {
    messageHash,
    signature,
  }
}

export class P2565Signer implements Signer {
  private keyPair: any
  private validatorAddr: string

  constructor(keyPair: any, address: string) {
    this.keyPair = keyPair
    this.validatorAddr = address
  }

  address(): string {
    return this.validatorAddr
  }

  async data(): Promise<BytesLike> {
    return '0x' + this.keyPair.getPublicKey('hex').substring(2)
  }

  async sign(opHash: string): Promise<string> {
    console.log(`opHash: ${opHash}`)
    const result = sign(this.keyPair, Buffer.from(opHash.substring(2), 'hex'))
    return result.signature
  }
}
