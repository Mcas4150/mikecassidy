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
        </nav>
        {/*<div className="left">
          <Link to={`/skills`} className="arrow l-border">Résumé</Link>
          <Link to={`/contact`} className="arrow l-border">About</Link>
        </div>
        <p className="center">

        </p>
        <div className="right">
          <Link to={`/portfolio`} className="arrow r-border">Portfolio</Link>
        </div>*/}
      </header>
    );
  }
}

export default Header;
