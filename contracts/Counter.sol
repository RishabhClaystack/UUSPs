// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

contract Counter{
    uint public counter;

    function initialize(uint intialValue) public {
        counter = intialValue;
    }

    function incrementByOne() public {
        counter++;
    }
}
