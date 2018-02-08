import React, { Component, PropTypes } from 'react';

import './App.css';
import Second from '../Item/index';
import Header from '../Header/index';
import Footer from '../Footer/index';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
        {/*  <header className="App-header">

            <h1 className="App-title">Welcome to React</h1>
          </header>*/}
          <Header />

            <div className="row">
              <div className="col-sm-4">
              {"123456".split("").map((e, i) => <Second key={i} name="Whatever"/>)}
              </div>
              <div className="col-sm-4">
              {"123456".split("").map((e, i) => <Second key={i} name="Wherever"/>)}
              </div>
              <div className="col-sm-4">
              {"123456".split("").map((e, i) => <Second key={i} name="Whoever"/>)}
              </div>


            </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
