import React, { Component, PropTypes } from "react";
import "../../globalstyle.css";
import "./App.css";
import Header from "../Header/index";
import Main from "../Main/index";
import Footer from "../Footer/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
