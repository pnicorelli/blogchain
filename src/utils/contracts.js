let Contracts = {
  'blogchain': (web3) => {
    let blogchain = new web3.eth.Contract([
      {
        "constant": false,
        "inputs": [
          {
            "name": "text",
            "type": "string"
          }
        ],
        "name": "writePost",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isUser",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "name",
            "type": "string"
          }
        ],
        "name": "subscribe",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "buyToken",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "posts",
            "type": "uint256"
          },
          {
            "name": "tokens",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getMe",
        "outputs": [
          {
            "name": "o_name",
            "type": "string"
          },
          {
            "name": "o_posts",
            "type": "uint256"
          },
          {
            "name": "o_tokens",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ], '0xf12b5dd4ead5f743c6baa640b0216200e89b60da');

    // let blogchain = new Blogchain('0x345ca3e014aaf5dca488057592ee47305d9b3e10');
    return blogchain;
  }
}

export default Contracts;
