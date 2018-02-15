import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';





      function sidebarTransition() {
        let el = document.querySelector("div.sidebar");
        let link = document.querySelector('div.hide');

        if (el) {
          el.className = "sidebar-full";
          link.className = "visible";
        } else {
          el = document.querySelector("div.sidebar-full");
          el.className = "sidebar";
          link = document.querySelector('div.visible');
          link.className = "hide";
        }

        return el, link;
      };







class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar" onClick={sidebarTransition}>

{/*          <Link onlyActiveOnIndex={true} key={1} to="/" activeClassName="activeNavLink" className="navLink">
              <h1>Mike Cassidy</h1>
            </Link>*/}
            <h1>Mike Cassidy</h1>
              <div className="hide">
                <div className="links">
                    <NavLink  to="/portfolio" activeClassName="activeNavLink"  className="navLink">
                      Portfolio
                    </NavLink>
                    <NavLink  to="/skills" activeClassName="activeNavLink" className="navLink">
                      Skills
                    </NavLink>
                    <NavLink  to="/contact" activeClassName="activeNavLink" className="navLink">
                      About
                    </NavLink>
                  </div>
              </div>

        </div>
    );
  }
}


export default Sidebar;
