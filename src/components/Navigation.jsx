import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav-container">
      <NavLink to="/" className="logo">Padoca</NavLink>
      <div className="menu-btn"></div>
      <div className="navigation">
        <ul>
          <li><NavLink to="/patisserie">Pâtisserie</NavLink></li>
          <li><NavLink to="/bakery">Bakery</NavLink></li>
          <li><NavLink to="/cafe">Café</NavLink></li>
          <li><NavLink to="/discover">Discover</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
        </ul>
      </div>
      <div className="icons">
        <i className="bx bx-help-circle"></i>
        <i className="bx bx-globe"></i>
        <i className="bx bx-user-circle"></i>
      </div>
    </nav>
  );
};

export default Navigation;