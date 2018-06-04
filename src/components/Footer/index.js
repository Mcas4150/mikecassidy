import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import "../../globalstyle.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer wrap">
        <p>Content © 2018 Mike Cassidy</p>
      </footer>
    );
  }
}

export default Footer;
