import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users
    }

  }

  componentWillReceiveProps(newProps){
    console.log(newProps);
    this.setState({
      users: newProps.users
    });
  }

  render(){
    return <div>
      <h2>Users</h2>
      <ul>
        {
          this.state.users.map( (i,u)=>{
              return (<li key={u}>{i}</li>)
            }
          )
        }
      </ul>
    </div>
  }

}

export default Users
