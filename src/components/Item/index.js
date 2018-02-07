import React, { Component } from 'react';
import './Second.css';



class Second extends Component {
  render() {
    return (
      <div className="Row">
        <div className="Second col-sm-4">
          <div className="Center">
             {this.props.name}
          </div>
        </div>
      </div>
    );
  }
}

export default Second;
