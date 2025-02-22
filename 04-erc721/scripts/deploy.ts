import { ethers } from "hardhat";

async function main() {
  console.log("Deploying MyNFT contract to Core testnet...");

  // Get the contract factory
  const MyNFT = await ethers.getContractFactory("MyNFT");
  
  // Deploy the contract
  const myNFT = await MyNFT.deploy();
  await myNFT.waitForDeployment();

  const address = await myNFT.getAddress();
  console.log(`MyNFT deployed to: ${address}`);
  console.log("Deployment completed!");
  
  // Verify deployment
  console.log("\nVerification steps:");
  console.log("1. Wait a few minutes for the deployment transaction to be confirmed");
  console.log(`2. Check your contract on Core testnet explorer: https://scan.test2.btcs.network/address/${address}`);
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
