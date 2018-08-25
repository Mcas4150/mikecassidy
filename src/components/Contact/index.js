import React, { Component } from "react";
import "./contact.css";
import "../../globalstyle.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <ul className="socials">
          <li className="socials__list-item">
            <a
              className="socials__item light-theme--link"
              href="tel:6174480635"
              target="_blank"
            >
              <span className="icon icon__social" aria-hidden="true " />
              <p className="phone">617-448-0635</p>
            </a>
          </li>
          <li className="socials__list-item">
            <a
              className="socials__item light-theme--link"
              href="mailto:me@mikecassidy.info"
              target="_blank"
            >
              <span
                className="icon icon--social icon-mail-alt"
                aria-hidden="true"
              />
              <p className="mail">Email</p>
            </a>
          </li>
          <li className="socials__list-item">
            <a
              className="socials__item light-theme--link"
              href="https://github.com/Mcas4150"
              target="_blank"
            >
              <span
                className="icon icon--social icon-github-circled"
                aria-hidden="true"
              />
              <p className="github">GitHub</p>
            </a>
          </li>
          <li className="socials__list-item">
            <a
              className="socials__item light-theme--link"
              href="https://www.linkedin.com/in/mike-cassidy-41847069/"
              target="_blank"
            >
              <span
                className="icon icon--social icon-linkedin-squared"
                aria-hidden="true"
              />
              <p className="linkedin">LinkedIn</p>
            </a>
          </li>
          <li className="socials__list-item">
            <a
              className="socials__item light-theme--link"
              href="https://www.dropbox.com/s/ce1klqyt9hd9lrx/Mike%20Cassidy%20Current%20Resume.pdf?dl=0"
              target="_blank"
            >
              <span
                className="icon icon--social icon-linkedin-squared"
                aria-hidden="true"
              />
              <p className="linkedin">Resume</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
