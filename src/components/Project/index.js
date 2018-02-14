import React, { Component } from 'react';
import ProjectAPI from '../../api'
import { Link } from 'react-router-dom'
import './Project.css';





// const Project = (props) => {
//   const project = ProjectAPI.get(name)
//   if (!project) {
//     return <div>Sorry, but the project was not found</div>
//   }
//   return (
//     <div>
//       <h1>{project.name} (#{project.number})</h1>
//       <h2>Position: {project.position}</h2>
//       <Link to='/roster'>Back</Link>
//     </div>
//   )
// }



class Project extends Component {


     // ProjectAPI.all().map(p => (
     //              <li key={p.name}>
     //                <Link to={`/portfolio/${p.name}`}>{p.name}</Link>
     //              </li>
     //            ))

//   const project = ProjectAPI.get(
//     parse(props.match.params.name)
//   );
//   if (!project) {
//     return <div>Sorry, but the project was not found</div>
//   }

//   render() {
//     return (
//         <div>
//       <h1>{project.name}</h1>
//       <h2>{project.description}</h2>
//       <Link to='/roster'>Back</Link>
//     </div>
//     );
//   }
}

export default Project;
