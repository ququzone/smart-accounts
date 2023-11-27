import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Buffer } from 'buffer';
// @ts-ignore
import ecPem from 'ec-pem';
import crypto from 'crypto';
import { Secp256r1 } from '../src/types';
import { sign } from '../src/p256';

describe('Secp256r1 tests', () => {
  let secp256r1: Secp256r1;

  before(async () => {
    secp256r1 = (await (await ethers.getContractFactory('Secp256r1')).deploy()) as Secp256r1;
  });

  it('validate secp256r1 signature', async () => {
    var prime256v1 = crypto.createECDH('prime256v1');
    prime256v1.generateKeys();

    var keyPair = ecPem(prime256v1, 'prime256v1');

    const { messageHash, signature } = sign(keyPair, Buffer.from('123'));
    const publicKey1 = '0x' + prime256v1.getPublicKey('hex').slice(2);
    const publicKey2 = '0x' + keyPair.getPublicKey('hex').substring(2);

    expect(publicKey1).to.eq(publicKey2);
    expect(await secp256r1.validateSignature(messageHash, signature, publicKey1)).to.equal(true);
  });
});
