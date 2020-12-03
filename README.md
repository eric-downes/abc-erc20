# ABC1 ERC20 Token

This repo contains information related to deploying the ERC20 currency token. We use
[truffle](https://www.trufflesuite.com/) to manage all ethereum related interactions. Truffle also supports
deploying contracts to mainnet. For more detail [see this](https://www.trufflesuite.com/tutorials/deploying-to-the-live-network)

## Setup

The following needs to be installed:

- `npm`
- `truffle` (`npm install -g truffle`)

Then install deps for this repo

```bash
npm install
```

## Setting an account and a node

To interact with the contracts, we need an account with some ETH. In addition, we need
a geth node. We are currently setup to work with rinkeby. Make sure your
account's private key and infura url are present in `truffle-config.js`.

## Deploying

To deploy all contracts to the desired network run

```bash
truffle migrate --network rinkeby
```

## Tests

There's currently a very simple test case on `test/currencyContract.test.js`. To run
this and all other tests, do

```bash
truffle test --network rinkeby
```

If things are working properly, you should see something like this

```
Using network 'rinkeby'.


Compiling your contracts...
===========================
✔ Fetching solc version list from solc-bin. Attempt #1
> Everything is up to date, there is nothing to compile.



  Contract: LongRoot token
    ✓ should have zero balance (1163ms)
    ✓ should mint some (12677ms)


  2 passing (15s)

```