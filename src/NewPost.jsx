import React from 'react';


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      posts: props.posts,
      tokens: props.tokens,
      buyToken: 0,
      buy: props.buy,
      post: '',
      publish: props.publish
    }

    this.updateBuyToken = this.updateBuyToken.bind(this);
    this.buy = this.buy.bind(this);
    this.publish = this.publish.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  updateBuyToken(event) {
    this.setState({buyToken: event.target.value});
    event.preventDefault();
  }

  updatePost(event) {
    this.setState({post: event.target.value});
    event.preventDefault();
  }

  buy(){
    this.state.buy(this.state.buyToken);
  }

  publish(){
    this.state.publish(this.state.post);
  }

  render(){
    return <div className="newpost">
      <h2>New Post</h2>
      <div className="info">
        Hey {this.state.name}, you have {this.state.tokens} tokens and you write {this.state.posts} posts.<br />
      </div>
      <div className="new">
        <input type="text" placeholder="write here your post" onChange={this.updatePost} value={this.state.post} /><button onClick={this.publish}>PUBLISH</button>
      </div>
      <div  className="tokens">
        Buy token (1 token = 1 ETH)<br></br>
        <input type="text" onChange={this.updateBuyToken} value={this.state.buyToken} /><button onClick={this.buy}>BUY</button>
      </div>
    </div>
  }

}

export default NewPost
