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

        <div className="row">


              {
                ProjectAPI.all().map(p => (
                  <div className="col-sm-6">
                    <Link to={`/portfolio/${p.name}`}>
                      <h2>{p.name}</h2>
                      <img src={p.image} className="preview"/>
                    </Link>
                    <p>{p.description}</p>
                  </div>
                ))
              }


        </div>

    );
  }
}

export default Projects;
