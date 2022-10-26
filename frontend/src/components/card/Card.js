import React from "react";
import project1 from "../../assets/about04.png";

const Card = () => {
  return (
    <div className="card">
      <img src={project1} alt="" />
      <div className="project__name">some name</div>
      <div className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, unde.
      </div>
      <div className="cardlink">
        <a href="/">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="/">
          <ion-icon name="link-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Card;
