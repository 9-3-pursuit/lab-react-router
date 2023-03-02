import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Northwest Animal Hospital</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/staff">
          <li>All Staff</li>
        </Link>
        <Link to="/pets">
          <li>All Pets</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
