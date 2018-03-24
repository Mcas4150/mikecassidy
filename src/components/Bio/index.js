import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bio.css';
import '../../globalstyle.css';
class Bio extends Component {
  render() {
    return (
      <article className="bio h1">
        <p>
        My name is Mike, and I am a web dgieveloper with an affinity for functional structures, human-computer interaction, and improving lives with sound.
        </p>
        <p>
I’m currently living in Boston, Massachusetts. Previously, I've worked with autistic children as an applied behavioral analyst and at the music distributor Forced Exposure. I now specialize in web development: how to build experiences, empower creativity, and scale design across mediums.
        </p>
        <p>
I spend my time listening, learning, building electronics, and writing <a href="https://github.com/Mcas4150">code</a>.

I’m currently available for work, so please take a look at  <a href="https://www.dropbox.com/s/970oz51rv8bbsyb/Mike%20Cassidy%20Resume%202018.pdf?dl=0">my résumé</a> or send me an <a href="mailto:mikecassidy0000@gmail.com">email</a> if you would like to be in touch.
        </p>
     </article>


    );
  }
}

export default Bio;
