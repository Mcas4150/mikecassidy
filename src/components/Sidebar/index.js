import React, { Component } from 'react';
import { Link } from 'react-router';
import './Sidebar.css';



class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
{/*          <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
              <h1>Mike Cassidy</h1>
            </Link>*/}
            <h1>Mike Cassidy</h1>
          <h4>Full-Stack Web Developer</h4>
          <div className="links">
            <Link onlyActiveOnIndex={true} key={2} to="/projects" activeClassName="activeNavLink" className="navLink">
              Projects
            </Link>
            <Link onlyActiveOnIndex={true} key={3} to="/skills" activeClassName="activeNavLink" className="navLink">
              Skills
            </Link>
            <Link onlyActiveOnIndex={true} key={4} to="/contact" activeClassName="activeNavLink" className="navLink">
              Contact
            </Link>
          </div>

        </div>
    );
  }
}


export default Sidebar;
