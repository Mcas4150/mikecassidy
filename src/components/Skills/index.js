import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (

        <div className="skills">
          <h1>Skills</h1>
          <div className="container">
            <div className="row">
              <div className='col-xs-2'>React.js</div>
              <div className='col-xs-2'>Redux</div>
              <div className='col-xs-2'>Node.js</div>
              <div className='col-xs-2'>Ruby on Rails</div>
              <div className='col-xs-2'>Javascript</div>
              <div className='col-xs-2'>CSS</div>
              <div className='col-xs-2'>HTML</div>
              <div className='col-xs-2'>Express</div>
              <div className='col-xs-2'>Python</div>
              <div className='col-xs-2'>C++</div>
              <div className='col-xs-2'>Max/MSP</div>
              <div className='col-xs-2'>PureData</div>
            </div>
          </div>
        </div>

    );
  }
}

export default Skills;
