import React, { Component } from 'react';
import './Second.css';



class Second extends Component {
  render() {
    return (
      <div className="Row">
        <div className="Second col-sm-4">

             {this.props.name}
        </div>
      </div>
    );
  }
}

export default Second;
