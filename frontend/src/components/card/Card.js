import React from "react";

import { urlFor } from "../../client";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={urlFor(data.image)} alt="" />
      </div>
      <div className="project__name">{data.name}</div>
      <div className="project__description">{data.description}</div>
      <div className="cardlink">
        <a target="_blank" href={data.github}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a target="_blank" href={data.livelink ? data.livelink : "/"}>
          <ion-icon name="link-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Card;
