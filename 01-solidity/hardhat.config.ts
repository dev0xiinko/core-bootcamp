import path from 'path'
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const PRIVATE_KEY = process.env.PRIVATE_KEY ?? "0000000000000000000000000000000000000000000000000000000000000001";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    core_testnet: {
      url: "https://rpc.test2.btcs.network",
      chainId: 1114,
      accounts: [PRIVATE_KEY],
      gasPrice: 50000000000, // 50 gwei
      gas: 500000 // gas limit
    }
  }
};

export default config;
