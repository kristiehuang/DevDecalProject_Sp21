var MerchToken = artifacts.require("./MerchToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MerchToken);
};
