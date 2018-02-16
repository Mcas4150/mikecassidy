import React, { Component } from 'react';
import SkillsAPI from '../../skillsAPI';
import { Link } from 'react-router-dom';
import './Skills.css';

class Skills extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (

        <div className="skills">
          <div className="title">Skills</div>
          <div className="container">
            <div className="row">
              {
                SkillsAPI.all().map(p => (
                  <div className="col-xs-4 col-sm-2">
                    <Link to={`${p.link}`} target="_blank">
                    <div className="name">{p.name}</div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

    );
  }
}

export default Skills;
