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
          <div className="greeting">Mike Cassidy</div>
          <article className="bio h1">
            <p className="indent">
              A software engineer with an affinity for functional structures,
              sound design, and human-computer interaction. Previously, I've
              worked as a music therapist with autistic children and as inventory manager
              at a music distributor. I now specialize in fullstack application
              development and audio/visual programming. I spend my time
              listening, learning, building electronics, and writing code,
              currently in based in Boston.
            </p>
          </article>

          <ul className="skills">
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
