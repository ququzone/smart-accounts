import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  const entryPoint = await ethers.getContract('EntryPoint')
  const handler = await ethers.getContract('DefaultCallbackHandler')

  await deploy('SmartAccountFactory', {
    from: deployer,
    args: [entryPoint.address, handler.address],
    log: true,
    deterministicDeployment: true,
  })
}

deploy.tags = ['factory', 'account']
deploy.dependencies = ['core', 'handler']
export default deploy
