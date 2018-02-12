import React, { Component, PropTypes } from 'react';

import './App.css';
import Main from '../Main/index';
import Sidebar from '../Sidebar/index';
import Header from '../Header/index';
import Footer from '../Footer/index';

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
