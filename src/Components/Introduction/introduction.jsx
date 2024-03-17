import React from "react";
import line from "../../assets/Line.png";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="Heading_1">
      <div className="Heading_2">
        <h1>Let’s Introduce Ourself</h1>
      </div>
      <div className="Lines">
        <img src={line} alt="Lines" />
      </div>
      <div className="Athor">
        <h3>Criminal Lawyer</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
