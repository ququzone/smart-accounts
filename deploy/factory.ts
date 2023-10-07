import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { addresses } from '../src/config'

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  let entryPointAddr = ''
  if (network.name == 'dev') {
    const entryPoint = await ethers.getContract('EntryPoint')
    entryPointAddr = entryPoint.address
  } else {
    // @ts-ignore
    entryPointAddr = addresses[network.name].entrypoint
  }

  const handler = await ethers.getContract('DefaultCallbackHandler')

  await deploy('SmartAccountFactory', {
    from: deployer,
    args: [entryPointAddr, handler.address],
    log: true,
    deterministicDeployment: true,
  })
}

deploy.tags = ['factory', 'account']
deploy.dependencies = ['core', 'handler']
export default deploy
