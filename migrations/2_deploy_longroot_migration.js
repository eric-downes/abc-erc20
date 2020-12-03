const LongRoot = artifacts.require("LongrootToken");

const tokenName = "Ascendant Biotech Currency"
const symbol = "ABC1"
const decimals = 8

module.exports = function (deployer) {
    deployer.deploy(LongRoot, tokenName, symbol, decimals);
};