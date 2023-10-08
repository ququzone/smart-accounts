import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  if (network.name == 'dev') {
    await deploy('EntryPoint', {
      from: deployer,
      args: [],
      log: true,
      deterministicDeployment: true,
    })
  }
}

deploy.tags = ['entrypoint', 'core']
export default deploy
