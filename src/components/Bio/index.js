import React, { Component } from "react";
import { Link } from "react-router-dom";
import Skillset from "./Skillset";
import "./Bio.css";
import "../../globalstyle.css";
import Footer from "../Footer/index.js";
import Header from "../Header/index.js";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <div className="text">
          <div className="greeting">Hi, I'm Mike</div>
          <article className="bio h1">
            <p>
              I'm a 26 year-old web developer with an affinity for functional
              structures, sound design, and human-computer interaction. I
              currently live in Boston.
            </p>
            <p>
              Previously, I've worked with autistic children as an applied
              behavioral analyst and at a music distributor. I now specialize in
              web development: how to build experiences, empower creativity, and
              scale design across mediums.
            </p>
            <p>
              I spend my time listening, learning, building electronics, and
              writing code. I’m currently available for work, so please take a
              look at my résumé or send me an email if you would like to be in
              touch.
            </p>
          </article>
          <p className="section__subtitle">In my projects I'm using:</p>
          <ul class="skills">
            {Skillset.skills.map(p => (
              <li className="skills__skill">
                <span className={p.image} />
                <p className="skills__text">{p.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Bio;
