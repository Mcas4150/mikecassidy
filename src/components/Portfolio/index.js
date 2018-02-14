import React, { Component } from 'react';
import './Portfolio.css';
import { Switch, Route } from 'react-router-dom';
import Projects from '../Projects/index';
import Project from '../Project/index';

class Portfolio extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (
      <div className="container">
        <div className="portfolio">

           <div className="title">Portfolio</div>


        </div>

              <Switch>
                <Route exact path='/portfolio' component={Projects}/>
                <Route path='/portfolio/:name' component={Project}/>
              </Switch>
      </div>
    );
  }
}

export default Portfolio;
