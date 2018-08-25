import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";
import outerSpace from "./outerSpace.js";
import superFormula from "./superFormula.js";
import "./BackgroundCanvas.css";

export default class BackgroundCanvas extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={outerSpace} />
        <Route path="/portfolio" component={superFormula} />
        <Route path="/contact" component={outerSpace} />
      </Switch>
    );
  }
}
