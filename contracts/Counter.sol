// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract Counter is UUPSUpgradeable{
    uint public counter;
    address public implmentation;
    address public owner;
    function initialize(uint intialValue) public {
        counter = intialValue;
        owner = msg.sender;
    }

    function incrementByOne() public {
        counter++;
    }

    function upgradeTo(address newImplementation) external virtual override {
        _upgradeTo(newImplementation);
    }

    function _authorizeUpgrade(address newImplementation) internal virtual override{
        require(msg.sender==owner,"Unauthorised Upgrade");
        require(AddressUpgradeable.isContract(newImplementation), "New implementation is not a contract");
    }
}
