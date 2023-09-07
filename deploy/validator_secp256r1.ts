import { ethers } from 'hardhat'
import { DeployFunction } from 'hardhat-deploy/types'
import { HardhatRuntimeEnvironment } from 'hardhat/types'

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deployer } = await getNamedAccounts()
  const { deploy } = deployments

  const chainId = (await ethers.provider.getNetwork()).chainId

  let secp256r1Contract = 'EllipticCurve'
  if (chainId == 4689 || chainId == 4690) {
    secp256r1Contract = 'Secp256r1IoTeX'
  }
  const secp256r1 = await deploy(secp256r1Contract, {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: true,
  })
  await deploy('P256Validator', {
    from: deployer,
    args: [secp256r1.address],
    log: true,
    deterministicDeployment: true,
  })
}

deploy.tags = ['secp256r1', 'validator']
export default deploy
