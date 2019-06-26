import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../logo.svg';

export class Header extends Component {
  headerStyle = () => {
    return {
      background: '#0F3F7F',
    }

  }
  render() {
    return (
      <div>
        <Navbar style={this.headerStyle()}>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="300"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Navbar>
        <br />
      </div >
    )
  }
}

export default Header
