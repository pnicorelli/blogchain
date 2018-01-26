import React from 'react';


class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: props.newUser,
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
    event.preventDefault();
  }

  subscribe(){
    console.log('subscribe with '+this.state.name);
    this.state.newUser( this.state.name )
  }

  render(){
    return <div>
      <input type="text" value={this.state.name} onChange={this.handleChange}></input>
      <button onClick={this.subscribe}>Subscribe</button>
    </div>
  }

}

export default Subscribe
