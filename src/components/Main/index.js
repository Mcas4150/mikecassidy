import React, { Component } from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Skills from '../Skills/index';
import Contact from '../Contact/index';
import Bio from '../Bio/index';
import Portfolio from '../Portfolio/index';
import '../../globalstyle.css';



class Main extends Component {
  render() {
    return (
      <main className="main wrap">

          <Switch>
            <Route exact path="/" component={Bio}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </main>
    );
  }
}


export default Main;
