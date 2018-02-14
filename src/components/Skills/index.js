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
                  <div className="col-xs-6 col-sm-3">
                    <Link to={`${p.link}`}>
                      <img src={p.image} className="skill-image"/>
                    </Link>
                    <h3>{p.name}</h3>
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
