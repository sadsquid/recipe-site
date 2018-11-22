import React from 'react';
import NavItem from './NavItem';
import './NavBar.css';

const NavBar = () => (
  <div className="NavBar">
    <NavItem link="/about" value="about" />
    <NavItem value="test" />
    <NavItem value="test" />
    <NavItem value="test" />
    <NavItem value="test" />
  </div>
);

export default NavBar;
