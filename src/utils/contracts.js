let params = require('./contracts.json')

let Contracts = {
  'blogchain': (web3) => {
    let blogchain = new web3.eth.Contract(params.abi, params.address);
    console.log('get contract on '+params.address);
    return blogchain;
  }
}

export default Contracts;
