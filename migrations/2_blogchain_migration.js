var Blogchain = artifacts.require("Blogchain");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Blogchain);
};
