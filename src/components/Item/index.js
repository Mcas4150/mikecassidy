import React, { Component } from 'react';
import './Second.css';



class Second extends Component {
  render() {
    return (
      <div className="row">
        <div className="Second">

             {this.props.name}

        </div>
      </div>
    );
  }
}

export default Second;
