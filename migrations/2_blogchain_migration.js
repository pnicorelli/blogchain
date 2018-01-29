var Blogchain = artifacts.require("Blogchain");

module.exports = function(deployer, network) {
  // deployment steps
  deployer.deploy(Blogchain).then(function(instance) {
    console.log(instance);
  });

};
