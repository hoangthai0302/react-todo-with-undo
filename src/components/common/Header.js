import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/cats" activeClassName="active">Cats</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
    </nav>
  );
};

export default Header;