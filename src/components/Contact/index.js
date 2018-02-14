import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  // constructor(props){
  //   super(props);

  // }



  render() {
    return (

        <div className="contact">

            <div className="title">Contact Me</div>
            <a href="mailto:mikecassidy0000@gmail.com">Email</a>
            <a href="linkedin.com/in/mike-cassidy-41847069/">LinkedIn</a>
            <a href="https://github.com/Mcas4150">Github</a>

        </div>

    );
  }
}

export default Contact;
