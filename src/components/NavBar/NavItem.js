import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './NavBar.css';

const NavItem = ({ value = '', link = '/' }) => (
  <Link className="NavItem NavItem-Link" to={link}>
    {value}
  </Link>
);

export default withRouter(NavItem);
