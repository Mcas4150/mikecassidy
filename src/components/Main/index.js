import React, { Component } from 'react';
import './Main.css';
import Item from '../Item/index';
import { Switch, Route } from 'react-router-dom';
import Skills from '../Skills/index';
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

          </Switch>
      </main>
    );
  }
}


export default Main;
