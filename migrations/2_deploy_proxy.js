const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const Counter = artifacts.require("Counter");

module.exports = async function (deployer) {
  const existing = await Counter.deployed();
  if (existing.address === "")
    await deployProxy(Counter, [10], { kind: "uups", deployer });
};
