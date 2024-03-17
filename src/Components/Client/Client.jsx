import React from "react";
import "./Client.css";
import Devon from "../../assets/Devon Lane.png";
import Jane from "../../assets/Jane Cooper.png";
import Rebert from "../../assets/Rebert Fox.png";

const Client = () => {
  return (
    <div>
      <h1 className="head">What says our happy Clients</h1>
      <div className="main">
        <div className="card">
          <img className="img" src={Jane} alt="" width="101px" height="101px" />
          <div className="body">
            <h2 className="title">Jane Cooper</h2>
            <h4 className="sub_title">Ceo of Hunt</h4>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              sitaliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="img"
            src={Devon}
            alt=""
            width="101px"
            height="101px"
          />
          <div className="body">
            <h2 className="title">Devon Lane</h2>
            <h4 className="sub_title">Ceo of Hunt</h4>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="img"
            src={Rebert}
            alt=""
            width="101px"
            height="101px"
          />
          <div className="body">
            <h2 className="title">Robert Fox</h2>
            <h4 className="sub_title">Ceo of Hunt</h4>
            <p className="text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer. sit
              aliqua dolor do amet sint. Velit officia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
