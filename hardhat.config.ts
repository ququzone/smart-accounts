import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'

import importToml from 'import-toml'
// @ts-ignore
const foundryConfig = importToml.sync('foundry.toml').profile

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
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
