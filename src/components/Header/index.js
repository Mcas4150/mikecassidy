import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../../globalstyle.css';

class Header extends Component {
  render() {
    return (
      <header className="wrap header">
        <a className="site_title b plainlink" href="/">
        Mike Cassidy, Developer
        </a>
        <nav role="navigation">
          <ul className="nav">
            <li>
              <Link to={`/skills`} className="plainlink">Résumé</Link>
            </li>
            <li><Link to={`/portfolio`} className="plainlink">Portfolio</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
