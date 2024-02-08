require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

// Config from environment
const mnemonicPhrase = process.env.MNEMONIC;
const privateKey = process.env.PRIVATE_KEY;
const mnemonicPassword = process.env.MNEMONIC_PASSWORD;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.23',
      }
    ]
  },
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: 'https://eth-goerli.public.blastapi.io',
      accounts: {
        mnemonic: mnemonicPhrase,
        path: 'm/44\'/60\'/0\'/0',
        initialIndex: 0,
        count: 1,
        passphrase: mnemonicPassword,
      },
      gasPrice: 100000000,
    }
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 0,
  },
  etherscan: {
    apiKey: {
      goerli: "3TEWVV2EK19S1Y6SV8EECZAGQ7W3362RCN",
    },
    customChains: [
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io/"
        }
      }
    ]
  },
};
