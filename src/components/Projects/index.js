import React, { Component } from 'react';
import './projects.css';
import ProjectAPI from '../../api'
import { Link } from 'react-router-dom'
class Projects extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (

        <div className="projects">

            <ul>
              {
                ProjectAPI.all().map(p => (
                  <li key={p.name}>
                    <Link to={`/portfolio/${p.name}`}><h2>{p.name}</h2></Link>
                    <img src={p.image} className="preview"/>
                    <p>{p.description}</p>
                  </li>
                ))
              }
            </ul>

        </div>

    );
  }
}

export default Projects;
