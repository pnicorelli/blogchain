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
    return <div className="users" >
      <h4>Users</h4>
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
