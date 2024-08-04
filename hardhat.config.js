require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["00f4b892a97f514e2d42f5ff3bcb1fa103f5d504576379159a540c635d4d84cc"], //Your private key starting with "0x"
    },
  },
};
