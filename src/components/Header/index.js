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
              <Link to={`/skills`} className="plainlink">CV</Link>
            </li>
            <li>
              <Link to={`/portfolio`} className="plainlink">Portfolio</Link>
            </li>
            <li>
              <a className="b plainlink" href="https://github.com/Mcas4150"  target="_blank">Github</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
