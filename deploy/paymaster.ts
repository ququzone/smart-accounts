import { ethers } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { addresses } from '../src/config';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  let entryPointAddr = '';
  if (network.name == 'dev') {
    const entryPoint = await ethers.getContract('EntryPoint');
    entryPointAddr = entryPoint.address;
  } else {
    // @ts-ignore
    entryPointAddr = addresses[network.name].entrypoint;
  }

  await deploy('VerifyingPaymaster', {
    from: deployer,
    args: [entryPointAddr, deployer],
    log: true,
    deterministicDeployment: false,
  });
};

deploy.tags = ['paymaster'];
deploy.dependencies = ['core'];
export default deploy;
