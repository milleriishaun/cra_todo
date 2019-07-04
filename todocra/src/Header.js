import React, { Component } from 'react';

class Header extends Component{
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

export default Header;
