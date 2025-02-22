import hre from 'hardhat'
import { CounterSmartContract__factory } from '../typechain-types'


async function Main() {

  const contractFactory = await hre.ethers.getContractFactory("CounterSmartContract");
  const deployment = await contractFactory.deploy();
  await deployment.waitForDeployment();

  console.log(`${deployment.target}`);
  
  // const contractFactory = await hre.ethers.getContractFactory(CounterSmartContract__factory)
  // const counter = await contractFactory.deploy();
  // await counter.waitForDevelopment();
  // console.log(`deployed to ${counter.target}`);
}

Main()