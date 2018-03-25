import React, { Component } from 'react';
import SkillsAPI from './skillsAPI';
import { Link } from 'react-router-dom';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
        <div className="CV grid">
          <div className="left">
            <div className="education">
              <h2>Education</h2>
                  {
                    SkillsAPI.education.map(p => (

                      <div className="entry">
                        <div className="institution">{p.name}</div>
                        <div className="degree">{p.degree}</div>
                        <div className="year">{p.year}</div>
                      </div>
                    ))
                  }
            </div>
            <div className="contact">
              <h2>Contact</h2>
                {
                    SkillsAPI.contact.map(p => (
                      <div className="">
                        <a href={p.description} target="_blank" className="plainlink">{p.name}</a>
                      </div>

                    ))
                  }
            </div>
            <div className="pdf">
              <a href="https://www.dropbox.com/s/970oz51rv8bbsyb/Mike%20Cassidy%20Resume%202018.pdf?dl=0"  target="_blank">(pdf)</a>
            </div>
            {/* <div className="skills">
                          <h2>Skills</h2>
                              {
                                SkillsAPI.skills.map(p => (
                                  <div className={p.image}>{p.name}</div>
                                ))
                              }
            </div> */}
          </div>
          <div className="right">
            <div className="employment">
            <h2>Employment</h2>
                 {
                    SkillsAPI.employment.map(p => (

                      <div className="entry">
                        <div className="employer">{p.employer}</div>
                        <div className="description">{p.description}</div>
                        <div className="year">{p.year}</div>
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
