const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const Counter = artifacts.require("Counter");

module.exports = async function (deployer) {
  const existing = await Counter.deployed();
  await deployProxy(Counter, [10], { deployer });
};
