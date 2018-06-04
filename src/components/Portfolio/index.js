import React, { Component } from "react";
import "./Portfolio.css";
import "../../globalstyle.css";
import ProjectAPI from "../../api";

class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* <div className="greeting">My Projects</div> */}
        <div className="portfolio">
          {ProjectAPI.all().map(p => (
            <div className="">
              <div className="">
                <div className="text">
                  <a href={p.url} target="_blank">
                    <h2>{p.name}</h2>
                  </a>
                  <p>
                    {p.description}.
                    <a href={p.github} target="_blank">
                      {" "}
                      (code)
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
