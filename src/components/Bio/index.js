import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Bio.css';
import '../../globalstyle.css';
class Bio extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (
      <article className="bio h1">
        <p>
        Mike Cassidy is a Developer with a penchant for the web, psychology, and interaction design. He prefers to refer to himself in the first person.
        </p>
        <p>
I’m currently living in Boston, Massachusetts. Previously, I've worked with autistic children as an applied behavioral analyst and at the music distributor <a href="https://www.forcedexposure.com/home.html">Forced Exposure</a>. I am now specializing in web development: how to build experiences, the teams that maintain them, and how they work at scale and across mediums.
        </p>
        <p>
I spend my time <a href="">listening</a>, learning, building electronics, and writing <a href="https://github.com/Mcas4150">code</a>.

I’m currently available for work, so please take a look at  <a href="https://www.dropbox.com/personal?preview=Michael+Cassidy++Resume.docx">my résumé</a> or send me an <a href="mailto:mikecassidy0000@gmail.com">email</a> if you would like to be in touch.
        </p>
     </article>


    );
  }
}

export default Bio;
