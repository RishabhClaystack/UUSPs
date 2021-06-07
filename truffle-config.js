const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const secrets = JSON.parse(fs.readFileSync(".secrets.json").toString().trim());

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 7545,
    },
    kovan: {
      networkCheckTimeout: 100000,
      provider: () => {
        return new HDWalletProvider(
          secrets.mnemonic,
          `wss://kovan.infura.io/ws/v3/${secrets.projectId}`
        );
      },
      network_id: "42",
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4", // Fetch exact version from solc-bin (default: truffle's version)
      docker: false, // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false,
  },
};
