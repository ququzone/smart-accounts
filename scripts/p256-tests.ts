import fs from 'fs';
import path from 'path';
// @ts-ignore
import ecPem from 'ec-pem';
import { EntryPoint } from '@account-abstraction/contracts';
import { ethers } from 'hardhat';
import { Client } from 'userop';
import { SmartAccount } from '../src/userop-builder';
import { P2565Signer } from '../src/p256';

async function main() {
  const chainId = (await ethers.provider.getNetwork()).chainId;

  const [admin] = await ethers.getSigners();
  const rpc = 'http://127.0.0.1:8545';
  const bundlerRpc = 'http://127.0.0.1:14337/1337';
  const entryPoint = (await ethers.getContract('EntryPoint')) as EntryPoint;
  const p256Validator = await ethers.getContract('P256Validator');

  const keyContent = fs.readFileSync(path.join(__dirname, 'key.pem'));
  const keyPair = ecPem.loadPrivateKey(keyContent);
  const p2565Signer = new P2565Signer(keyPair, p256Validator.address);

  const client = await Client.init(rpc, {
    entryPoint: entryPoint.address,
    overrideBundlerRpc: bundlerRpc,
  });
  const accountBuilder = await SmartAccount.init(p2565Signer, rpc, {
    overrideBundlerRpc: bundlerRpc,
    entryPoint: entryPoint.address,
  });
  accountBuilder.setVerificationGasLimit(1500000);

  await admin.sendTransaction({
    to: accountBuilder.getSender(),
    value: ethers.utils.parseEther('2.0'),
  });

  const account = accountBuilder.getSender();
  const response = await client.sendUserOperation(accountBuilder);
  console.log(`Create ${account} ophash: ${response.userOpHash}`);
  const userOperationEvent = await response.wait();
  console.log(`Create ${account} txhash: ${userOperationEvent?.transactionHash}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
