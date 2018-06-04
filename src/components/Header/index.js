import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "../../globalstyle.css";

class Header extends Component {
  render() {
    return (
      <header className="wrap header">
        <nav role="navigation">
          <ul className="nav">
            <li>
              <Link to={`/`} className="plainlink">
                About
              </Link>
            </li>
            <li>
              <Link to={`/portfolio`} className="plainlink">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to={`/contact`} className="plainlink">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
