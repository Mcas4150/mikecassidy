import React, { Component } from 'react';
import './Box.css';



      function updateTransition() {
        let el = document.querySelector("div.box");

        if (el) {
          el.className = "box1";
        } else {
          el = document.querySelector("div.box1");
          el.className = "box";
        }

        return el;
      };





class Box extends Component {
  // constructor(props){
  //   super(props);

  // }
componentDidMount() {



 }

  render() {
    return (

        <div className='box' onClick={updateTransition}>Mike</div>



    );
  }
}


  export default Box;




