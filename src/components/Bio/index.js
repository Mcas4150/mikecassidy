import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Skillset from './Skillset';
import './Bio.css';
import '../../globalstyle.css';
class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <article className="bio h1">
          <p>
          Welcome. I am a web developer with an affinity for functional structures, human-computer interaction, and improving lives with sound. I’m currently living in Boston. 
          </p>
          <p>
  Previously, I've worked with autistic children as an applied behavioral analyst and at the music distributor Forced Exposure. I now specialize in web development: how to build experiences, empower creativity, and scale design across mediums.
          </p>
          <p>
  I spend my time listening, learning, building electronics, and writing code.

  I’m currently available for work, so please take a look at  my résumé or send me an giemail if you would like to be in touch.
          </p>
      </article>
      <p className="section__subtitle">In my projects I'm using:</p>
        <ul class="skills">
          {
            Skillset.skills.map(p => (
              <li className="skills__skill">
                <span className={p.image}/>
                <p className="skills__text">{p.name}</p>
              </li>
          ))
          }
        </ul>
      </div>
    );
  }
}

export default Bio;
