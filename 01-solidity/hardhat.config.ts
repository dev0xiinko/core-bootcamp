import path from 'path'
import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

export default config;
