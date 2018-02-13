import React, { Component } from 'react';
import ProjectAPI from '../api'
import './Project.css';



class Project extends Component {
  constructor(props){
    super(props);
    this.state = { greeting: "Yo" };
    this.frenchify = this.frenchify.bind(this);
  }

  frenchify(){
    this.setState({ greeting: "Fuck"});
  }


  render() {
    return (
      <div className="row">
        <div className="Item">

            {this.state.greeting} {this.props.name}
            <br/>
            <button onClick={this.frenchify}>Frenchify</button>
        </div>
      </div>
    );
  }
}

export default Project;
