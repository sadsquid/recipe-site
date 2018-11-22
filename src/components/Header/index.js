import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => (
  <div className="Header">
    <div className="Header-image">
      <img src={logo} className="Header-logo" alt="logo" />
    </div>
    <div />
  </div>
);

export default Header;
