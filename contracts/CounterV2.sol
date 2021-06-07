// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

import {Counter} from './Counter.sol';

contract CounterV2 is  Counter {
    function decrementByOne() public{
        counter--;
    }
}
