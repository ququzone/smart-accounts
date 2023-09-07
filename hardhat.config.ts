import * as dotenv from 'dotenv'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-deploy'

import importToml from 'import-toml'
// @ts-ignore
const foundryConfig = importToml.sync('foundry.toml').profile

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const accounts = PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    dev: {
      url: "http://127.0.0.1:8545",
      accounts: accounts,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
    admin: {
      default: 1,
    },
  },
  solidity: {
    compilers: [{
      version: "0.8.19",
      settings: {
        viaIR: foundryConfig.default.via_ir,
        optimizer: {
          enabled: true,
          runs: foundryConfig.default.optimizer_runs,
        },
        metadata: {
          bytecodeHash: 'none',
        },
      }
    }, {
      version: "0.7.6",
      settings: {
        viaIR: foundryConfig.default.via_ir,
        optimizer: {
          enabled: true,
          runs: foundryConfig.default.optimizer_runs,
        },
        metadata: {
          bytecodeHash: 'none',
        },
      }
    }]
  },
  typechain: {
    outDir: "types"
  },
}
