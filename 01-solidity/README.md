# Solidity Learning Project

This project contains examples demonstrating various Solidity concepts and features. Each contract and test focuses on a specific aspect of Solidity development using the Hardhat framework.

## Project Structure

- `contracts/`: Contains example Solidity smart contracts
- `test/`: Contains corresponding test files for each contract
- `ignition/`: Contains deployment modules

## Available Commands

```shell
# Show all available Hardhat commands
npx hardhat help

# Run all tests
npx hardhat test

# Run tests with gas reporting enabled
REPORT_GAS=true npx hardhat test

# Start a local Hardhat node
npx hardhat node

# Deploy contracts using Hardhat Ignition
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```

## Concepts Covered

1. Data Types (01_solidity_data_types.sol)
2. Constructors (02_solidity_constructor.sol) 
3. Functions (03_solidity_functions.sol)
4. Modifiers (04_solidity_modifiers.sol)
5. Error Handling (05_solidity_errors.sol)
6. Events (06_solidity_events.sol)

Each contract includes examples and tests demonstrating the specific concept.
