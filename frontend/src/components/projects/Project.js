import React from "react";
import Card from "../card/Card";
import calander from "../../assets/calander.png";

const Project = () => {
  return (
    <section className="projects">
      <h2 className="boxheading">
        <img src={calander} alt="calander" /> projects
      </h2>

      <div className="projects__wrapper">
        <Card />
        <Card />
        <Card />
      </div>

      <button className="btn iconbtn">
        <ion-icon name="barcode-outline"></ion-icon> Show more
      </button>
    </section>
  );
};

export default Project;
