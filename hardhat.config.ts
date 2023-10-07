import * as dotenv from 'dotenv'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-deploy'

import importToml from 'import-toml'
import { BigNumber } from 'ethers'
// @ts-ignore
const foundryConfig = importToml.sync('foundry.toml').profile

dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const accounts = PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : []

const deterministicInfo = {
  4689: {
    gasPrice: 1000000000000,
    gasLimit: 100000,
    signerAddress: "0xDF0BcE43C0ADc06CD0545E676da9c59f00b55F9B",
    transaction:
      "0xf8a78085e8d4a51000830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf38224c5a0a3c9008f3426b5c46093e0e478b3dcbd3adc7da079ba7e15aee7d1b51d1bb21da015e3cb3214bc1f9a6efabb4ad5c98ecd073a098afaa6a4fb217a57a81a7f995c",
    address: "0x355BE1cbfFBf803fdb17E0CB207D051cD9816916",
  },
  4690: {
    gasPrice: 1000000000000,
    gasLimit: 100000,
    signerAddress: "0xDF0BcE43C0ADc06CD0545E676da9c59f00b55F9B",
    transaction:
      "0xf8a78085e8d4a51000830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf38224c8a05892db0b1697fa0a0e411b1e5b585410ba47759e7d9d37b41cfab3e248dc3892a060874f9f44ecb166e408fc99cc9cac88ec9ba43b3140cfd6e9d318e1456c0c6e",
    address: "0x355BE1cbfFBf803fdb17E0CB207D051cD9816916",
  },
  31337: {
    gasPrice: 2000000000,
    gasLimit: 100000,
    signerAddress: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
    transaction:
      "0xf8a6808477359400830186a08080b853604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf382f4f6a0fb353d5ce17293d3b3a7794c1263566a3cb5560b6ba676c7d8e2b5af4d7ab793a05fe09a9a316dfa91f1d7f6b444f45b0f84b785ddc1954f403a58761cce3a9056",
    address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  },
}

const deterministicDeployment = (network: string) => {
  // @ts-ignore
  const info = deterministicInfo[parseInt(network)]
  if (!info) {
    throw new Error(`
      Safe factory not found for network ${network}. You can request a new deployment at https://github.com/safe-global/safe-singleton-factory.
      For more information, see https://github.com/safe-global/safe-contracts#replay-protection-eip-155
    `)
  }

  return {
    factory: info.address,
    deployer: info.signerAddress,
    funding: BigNumber.from(info.gasLimit).mul(BigNumber.from(info.gasPrice)).toString(),
    signedTx: info.transaction,
  }
}

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
    iotex_testnet: {
      url: "https://babel-api.testnet.iotex.io",
      chainId: 4690,
      accounts: accounts,
    },
  },
  deterministicDeployment,
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
