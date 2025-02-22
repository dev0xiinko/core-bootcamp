import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("CounterSmartContract");
  console.log("Deploying Counter contract...");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();

  const address = await counter.getAddress();
  console.log("Counter deployed to:", address);

  // Verify the contract works
  await counter.increment();
  const count = await counter.getCount();
  console.log("Counter value after increment:", count.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
