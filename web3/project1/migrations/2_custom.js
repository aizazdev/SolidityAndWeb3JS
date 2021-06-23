const First = artifacts.require("./first.sol");

module.exports = function (deployer) {
  deployer.deploy(First);
};
