import React, { Component } from 'react';
import './Main.css';
import Item from '../Item/index';


class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="container">
          <div className="row">
              <div className="col-sm-4">
                {"123456".split("").map((e, i) => <Item key={i} name="Whatever"/>)}
              </div>
              <div className="col-sm-4">
                {"123456".split("").map((e, i) => <Item key={i} name="Wherever"/>)}
              </div>
              <div className="col-sm-4">
                {"123456".split("").map((e, i) => <Item key={i} name="Whoever"/>)}
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
