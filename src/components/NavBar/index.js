import React, { Component } from 'react';
import NavItem from './NavItem';
import './NavBar.css';

class NavBar extends Component {
  render() {
    const { navActive, onClick } = this.props;
    return (
      <div className="NavBar">
        <NavItem
          active={navActive === 'navItem-about'}
          link="/about"
          label="about"
          onClick={onClick}
        />
        <NavItem
          active={navActive === 'navItem-recipes'}
          link="/recipes"
          label="recipes"
          onClick={onClick}
        />
        <NavItem
          active={navActive === 'navItem-food'}
          link="/food"
          label="food"
          onClick={onClick}
        />
      </div>
    );
  }
}

export default NavBar;
