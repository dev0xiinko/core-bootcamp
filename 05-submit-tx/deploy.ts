import { ethers } from "ethers";
import * as dotenv from "dotenv";
import { CoreConnectBootcampPH__factory } from "./typechain-types";

dotenv.config();

async function main() {
    // Connect to the network
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    
    console.log("Deploying CoreConnectBootcampPH contract...");
    
    // Deploy the contract
    const contractFactory = new CoreConnectBootcampPH__factory(wallet);
    const contract = await contractFactory.deploy();
    await contract.waitForDeployment();
    
    console.log(`Contract deployed to: ${await contract.getAddress()}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
