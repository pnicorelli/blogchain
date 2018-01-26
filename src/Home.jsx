import React from 'react';
import BlogChain from './BlogChain'
import getWeb3 from './utils/getWeb3'
import contracts from './utils/contracts'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      blogchain:null,
      isConnected: false
    }
  }

  componentDidMount() {
    getWeb3
    .then(web3 => {
      let blogchain = contracts.blogchain(web3);
      let account = web3.eth.accounts[0];
      blogchain.defaultAccount = account;
      this.setState({
        blogchain: blogchain,
        account: account
      });
    })
    .catch((err) => {
      console.log('Error finding web3.', err)
    })
  }


  render() {
    return (
      <div className="Home">
        {
          this.state.blogchain
          ? <BlogChain contract={this.state.blogchain} account={this.state.account}/>
        : <div>Not Connected</div>
        }
      </div>
    );
  }
}

export default Home


/*
Running migration: 2_blogchain_migration.js
  Deploying Blogchain...
  ... 0xe3e9f4f5c577ef20e5d10287cab1a73ec30a463fa8e2ce51c2c129b4d1ea6657

  Blogchain: 0x345ca3e014aaf5dca488057592ee47305d9b3e10
Saving successful migration to network...
  ... 0xf36163615f41ef7ed8f4a8f192149a0bf633fe1a2398ce001bf44c43dc7bdda0
Saving artifacts...
 */
