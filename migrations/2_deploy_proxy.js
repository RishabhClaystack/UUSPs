const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const Counter = artifacts.require("Counter");

module.exports = async function (deployer) {
  await deployProxy(Counter, [10], { deployer });
};
