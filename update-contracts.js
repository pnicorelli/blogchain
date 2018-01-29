let fs = require('fs');

let contracts = require('./build/contracts/Blogchain.json');
let params = {
  abi: contracts.abi,
  address: contracts.networks['5777'].address
}

fs.writeFileSync('./src/utils/contracts.json', JSON.stringify(params));
