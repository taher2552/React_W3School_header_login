import React, { Component } from 'react';
import W3SchoolHeader from './W3SchoolHeader.js';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password:'',
      userLogIn: false
    };
  }

  usernameFunc = (e) => {
    this.setState({ username: e.target.value });
  }
  passwordFunc = (e) => {
    this.setState({ password: e.target.value });
  }

  Submit = (e) => {
    e.preventDefault();
    this.setState({ userLogIn: true });
  }

  logOut = (e) => {
    this.setState({ userLogIn: false });
    this.setState({ username:"" });
    this.setState({ password:""});
  }

  render() {

    return (
      <div>
        {!this.state.userLogIn ? (
          <form onSubmit={this.Submit}>

              <input type="text" value={this.state.username} placeholder="Enter username" onChange={this.usernameFunc} /><br></br>
              <input type="password" value={this.state.password} placeholder="Enter password" onChange={this.passwordFunc} /><br></br>
    
            <button type="submit">Login</button>
          </form>
        ) : (
            <>
          {/* <h1>Hello {this.state.username}!</h1>
          <button onClick={this.logOut}>LogOut</button> */}
          <W3SchoolHeader username={this.state.username}></W3SchoolHeader>
          </>
        )}
      </div>
    );
  }
}

export default Footer;