// SPDX-Licemnse-Identifier: MIT
pragma solidity ^0.8.0;

contract CounterSmartContract {
    //declaring variable count
    int private count;

    function increment () public {
        count += 1;
    }
    //decrement
    function decrement () public {
        count -= 1;
    }
    //get count value
    function getCount() public view returns (int) {
        return count;
    }
}