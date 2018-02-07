import React, { Component, PropTypes } from 'react';

import './App.css';
import Second from '../Item/index';
import Header from '../Header/index';
import Footer from '../Footer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/*  <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <Header />
        <p className="App-intro">
          To get going say hi
        </p>

        {"123456789".split("").map((e, i) => <Second key={i} name="whatever"/>)}
        <Footer />
      </div>

    );
  }
}

export default App;
