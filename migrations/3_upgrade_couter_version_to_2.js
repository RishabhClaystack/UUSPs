const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const Counter = artifacts.require("Counter");
const CounterV2 = artifacts.require("CounterV2");

module.exports = async function (deployer) {
  const existing = await Counter.deployed();
  const instance = await upgradeProxy(existing.address, CounterV2, [10], {
    deployer,
  });
  console.log("Contract is upgraded", instance.address);
};
