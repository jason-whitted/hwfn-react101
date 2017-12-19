import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>
      <Link to="/">Battle.not</Link>
    </h1>
    <nav>
      <ul className="list-inline">
        <li>
          <Link to="/character">Character</Link>
        </li>
        <li>
          <Link to="/mounts">Mounts</Link>
        </li>
        <li>
          <Link to="/realmstatus">Realm Status</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
