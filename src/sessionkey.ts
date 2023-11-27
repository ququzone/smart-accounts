import * as ethers from 'ethers';
import { Signer } from './userop-builder';
import { arrayify } from 'ethers/lib/utils';

export class SessionKeySigner implements Signer {
  private signer: ethers.Signer;
  private validatorAddr: string;

  constructor(signer: ethers.Signer, address: string) {
    this.signer = signer;
    this.validatorAddr = address;
  }

  signatureLength(): number {
    return 128;
  }

  address(): string {
    return this.validatorAddr;
  }

  async data(): Promise<ethers.BytesLike> {
    return this.signer.getAddress();
  }

  async sign(opHash: string): Promise<string> {
    return this.signer.signMessage(arrayify(opHash));
  }
}
