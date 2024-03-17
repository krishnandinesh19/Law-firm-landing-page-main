import React from "react";
import gift from "../../assets/gift.png";
import "./Cardpage.css";
import Introduction from "../Introduction/introduction";

const Card = () => {
  return (
    <div>
      <Introduction />
      <h1 className="head">Why Choose us?</h1>
      <div className="main">
        <div className="card">
          <img className="img" src={gift} alt="" width="101px" height="101px" />
          <div className="body">
            <h2 className="title">98% Success Rade</h2>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="card" style={{ backgroundColor: "#2E2E2E" }}>
          <img className="img" src={gift} alt="" width="101px" height="101px" />
          <div className="body">
            <h2 className="title">100% Success Rate</h2>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
        <div className="card">
          <img className="img" src={gift} alt="" width="101px" height="101px" />
          <div className="body">
            <h2 className="title">100% Success Rate</h2>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </p>
            <button className="button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
