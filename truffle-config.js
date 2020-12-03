const HDWalletProvider = require("@truffle/hdwallet-provider")

const privateKey = "";
const rinkebyUrl = "";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      networkCheckTimeout: 1000000000,
      network_id: "*" // Match any network id,
    },

    rinkeby: {
      provider: function () {
        return new HDWalletProvider(privateKey, rinkebyUrl)
      },
      network_id: 4
    }
  },

  compilers: {
    solc: {
      version: "^0.5.6"
    }
  },

  mocha: {
    timeout: '90m'
  }
};
