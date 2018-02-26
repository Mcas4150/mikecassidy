import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

class Contact extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (

        <div className="contact">


            <div className="bio">Mike Cassidy is a Developer with a penchant for the web, psychology, and interaction design. He prefers to refer to himself in the first person.

<br/>
I’m currently living in Boston, Massachusetts. Previously, I've worked with autistic children as an applied behavioral analyst and at the music distributor <a href="https://www.forcedexposure.com/home.html">Forced Exposure</a>. I am now specializing in Web Development: how they break, the teams that maintain them, and how they work at scale and across mediums.
<br/>

I spend my time <a>listening</a>, adapting, building electronics, and writing <a href="https://github.com/Mcas4150">code</a>. I also write about design, courage, and lack thereof.

I’m currently available for work, so please take a look at  <Link to={`/skills`}>my résumé</Link> or send me an <a href="mailto:mikecassidy0000@gmail.com">email</a> if you would like to be in touch.
            </div>
{/*
            <a href="linkedin.com/in/mike-cassidy-41847069/">LinkedIn</a>
*/}

        </div>

    );
  }
}

export default Contact;
