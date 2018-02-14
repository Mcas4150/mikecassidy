import React, { Component } from 'react';
import Box from '../Box/index';
import { NavLink } from 'react-router-dom';
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
              <NavLink  to="/portfolio" activeClassName="activeNavLink" className="navLink">
                Portfolio
              </NavLink>
              <NavLink  to="/skills" activeClassName="activeNavLink" className="navLink">
                Skills
              </NavLink>
              <NavLink  to="/contact" activeClassName="activeNavLink" className="navLink">
                Contact
              </NavLink>

          </div>
          <Box/>
        </div>
    );
  }
}


export default Sidebar;
