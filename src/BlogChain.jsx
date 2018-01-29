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
      users: [],
      name: '',
      tokens:0,
      postsList: []
    }
    this.newUser = this.newUser.bind(this);
    this.buyToken = this.buyToken.bind(this);
    this.publish = this.publish.bind(this);
  }

  componentDidMount(){
    this.state.contract.methods.isUser().call({from: this.state.whoAreYou}, (err, res)=>{

      this.state.contract.methods.howManyUsers().call({from: this.state.whoAreYou}, (err, res)=>{
        for(let i=0; i<res; i++){
          this.state.contract.methods.getUsername(i).call({from: this.state.whoAreYou}, (err, ures)=>{
            let u = this.state.users;
            u.push(ures);
            this.setState({
              users: u
            });
          });
        }
      });

      this.state.contract.methods.howManyPosts().call({from: this.state.whoAreYou}, (err, res)=>{
        for(let i=0; i<res; i++){
          this.state.contract.methods.getPost(i).call({from: this.state.whoAreYou}, (err, pres)=>{
            let ps = this.state.postsList;
            let tmp = {
              author: pres.o_author,
              text: pres.o_text,
              date: pres.o_date,
            }
            console.log(typeof ps)
            ps.push(tmp);
            this.setState({
              postsList: ps
            });
          });
        }
      });

      if( res ){
        this.state.contract.methods.getMe().call({from: this.state.whoAreYou}, (err, res)=>{
          this.setState({
            name: res.o_name,
            posts: res.o_posts,
            tokens: res.o_tokens,
            isUser: res
          });
        });
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

  buyToken(wei){
    this.state.contract.methods.buyToken().send({from:this.state.whoAreYou, value: wei*1000000000000000000},
      (err, res)=>{
        console.log('buyToken')
        console.log(err)
        console.log(res)

      }
    )
  }

  publish(post){
    this.state.contract.methods.writePost(post).send({from:this.state.whoAreYou, value:0},
      (err, res)=>{
        console.log('writePost')
        console.log(err)
        console.log(res)

      }
    )
  }

  render(){
    return <div>
      <h1 className="title">the useless blogchain</h1>
      <div className="headerWallet">Your wallet address is {this.state.whoAreYou}</div>
      <Posts posts={this.state.postsList}></Posts>
      <Users users={this.state.users}></Users>
      {
        this.state.isUser
        ? <NewPost  name={this.state.name} posts={this.state.posts} tokens={this.state.tokens} buy={this.buyToken} publish={this.publish}></NewPost>
        : <Subscribe  newUser={this.newUser}></Subscribe>
      }

    </div>
  }

}

export default BlogChain
