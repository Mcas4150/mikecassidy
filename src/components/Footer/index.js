import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="left">
          <Link to={`/skills`} className="arrow l-border">Résumé</Link>
        </div>
        <p className="center">
          Mike Cassidy
        </p>
        <div className="right">
          <Link to={`/portfolio`} className="arrow r-border">Portfolio</Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
