import React, { Component, PropTypes } from 'react';

import './App.css';
import Main from '../Main/index';
import Sidebar from '../Sidebar/index';


class App extends Component {
  render() {
    return (

      <div className="App">

        <Sidebar />
        <Main />
      </div>
    );
  }
}

export default App;
