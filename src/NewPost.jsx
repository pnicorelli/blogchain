import React from 'react';


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      posts: props.posts,
      tokens: props.tokens
    }
  }

  render(){
    return <div>
      <h2>New Post</h2>
      <div>
        Hey {this.state.name}, you have {this.state.tokens} tokens and you write {this.state.posts} posts.<br />
      </div>
    </div>
  }

}

export default NewPost
