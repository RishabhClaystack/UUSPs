// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "./Counter.sol";

contract CounterV2 is Counter{
    function decrementByOne() public {
        counter--;
    }
}