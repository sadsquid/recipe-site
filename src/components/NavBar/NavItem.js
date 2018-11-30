import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './NavBar.css';

const NavItem = ({ active, label, link, onClick }) => (
  <Link
    className={active ? 'NavItem-Link is-active' : 'NavItem-Link'}
    id={`navItem-${label}`}
    to={link}
    onClick={onClick}
  >
    {label}
  </Link>
);

export default withRouter(NavItem);
