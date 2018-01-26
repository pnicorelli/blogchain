import React from 'react';
import Posts from './Posts';
import Users from './Users';
import NewPost from './NewPost';
import Subscribe from './Subscribe';

class BlogChain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      whoAreYou: web3.eth.defaultAccount,
      contract: props.contract,
      isUser: false,
      name: '',
      tokens:0,
      posts: 0
    }
    this.newUser = this.newUser.bind(this);
  }

  componentDidMount(){
    this.state.contract.methods.isUser().call({from: this.state.whoAreYou}, (err, res)=>{
      if( res ){
        this.state.contract.methods.getMe().call({from: this.state.whoAreYou}, (err, res)=>{
          this.setState({
            name: res.o_name,
            posts: res.o_posts,
            tokens: res.o_tokens,
            isUser: res
          });
        })
      } else {
        this.setState({
          isUser: res
        });
      }
    });
  }

  newUser(name){
    this.state.contract.methods.subscribe(name).send({from:this.state.whoAreYou, value:0},
      (err, res)=>{
        console.log('newUser')
        console.log(err)
        console.log(res)

      }
    )
  }

  render(){
    return <div>
      <div>Hey {this.state.whoAreYou}</div>
      <Posts  contract={this.state.contract}></Posts>
      <Users  contract={this.state.contract}></Users>
      {
        this.state.isUser
        ? <NewPost  name={this.state.name} posts={this.state.posts} tokens={this.state.tokens}></NewPost>
        : <Subscribe  newUser={this.newUser}></Subscribe>
      }

    </div>
  }

}

export default BlogChain
