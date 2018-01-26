import React from 'react';


class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contract: props.contract
    }
  }
  componentDidMount(){
    console.log( this.state.contract );
  }
  render(){
    return <div>
Users
    </div>
  }

}

export default Users
