import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts
    }
  }

  timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  render(){
    return <div className="posts">
      <h4>Posts</h4>
      <ul>
      {
        this.state.posts.map( (i,u)=>{
            return (<li key={u}>
              <div className="author">{i.author}</div>
              <div className="text">{i.text}</div>
              <div className="date">{this.timeConverter(i.date)}</div>

            </li>)
          }
        )
      }
    </ul>
    </div>
  }

}

export default Posts
