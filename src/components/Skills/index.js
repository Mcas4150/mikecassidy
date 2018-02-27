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
        <div className="grid">
          <div className="skills">
            <h2>Skills</h2>
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
          <div className="education">
            <h2>Education</h2>
          </div>
          <div className="jobs">
            <h2>Jobs</h2>
          </div>
          <div className="volunteer">
            <h2>Volunteer</h2>
          </div>
        </div>
    );
  }
}

export default Skills;
