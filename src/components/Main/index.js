import React, { Component } from 'react';
import './Main.css';
import Item from '../Item/index';
import { Switch, Route } from 'react-router-dom';
import Skills from '../Skills/index';
import Contact from '../Contact/index';
import Portfolio from '../Portfolio/index';


class Main extends Component {
  render() {
    return (
      <div className="main">
          <Switch>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      {/*  <div className="container">
          <div className="row">
              <div className="col-sm-4">
                {"12345678".split("").map((e, i) => <Item key={i} name="Whatever"/>)}
              </div>
              <div className="col-sm-4">
                {"12345678".split("").map((e, i) => <Item key={i} name="Wherever"/>)}
              </div>
              <div className="col-sm-4">
                {"12345678".split("").map((e, i) => <Item key={i} name="Whoever"/>)}
              </div>
          </div>
        </div>*/}
      </div>
    );
  }
}


export default Main;
