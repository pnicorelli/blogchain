import React from 'react';


class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts
    }
  }

  render(){
    return <div>
      <h4>Posts</h4>
      {
        this.state.posts.map( (i,u)=>{
            return (<li key={u}>
              <div className="author">{i.author}</div>
              <div className="text">{i.text}</div>
              <div className="date">{i.date}</div>

            </li>)
          }
        )
      }
    </div>
  }

}

export default Posts
