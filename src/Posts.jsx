import React from 'react';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contract: props.contract
    }
  }

  render(){
    return <div>
posts
    </div>
  }

}

export default Posts
