import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const MyNFT = await ethers.getContractFactory("MyNFT");
  
  // Deploy the contract
  const myNFT = await MyNFT.deploy();
  await myNFT.waitForDeployment();

  const address = await myNFT.getAddress();
  console.log(`MyNFT deployed to: ${address}`);
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
