import path from 'path'
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const {PRIVATE_KEY} = process.env
const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    core_testnet: {
      accounts:[PRIVATE_KEY],
      url:"https://rpc.test2.btcs.network",
      chainId: 1114
    }
  }
};

export default config;
