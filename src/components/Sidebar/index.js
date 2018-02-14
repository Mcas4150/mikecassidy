import React, { Component } from 'react';
import Box from '../Box/index';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';





      function sidebarTransition() {
        let el = document.querySelector("div.sidebar");

        if (el) {
          el.className = "sidebar-full";
        } else {
          el = document.querySelector("div.sidebar-full");
          el.className = "sidebar";
        }

        return el;
      };







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
              <NavLink  to="/portfolio" activeClassName="activeNavLink" onClick={sidebarTransition} className="navLink">
                Portfolio
              </NavLink>
              <NavLink  to="/skills" activeClassName="activeNavLink" onClick={sidebarTransition} className="navLink">
                Skills
              </NavLink>
              <NavLink  to="/contact" activeClassName="activeNavLink" onClick={sidebarTransition} className="navLink">
                Contact
              </NavLink>

            </div>


        </div>
    );
  }
}


export default Sidebar;
