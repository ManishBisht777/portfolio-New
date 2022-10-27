import React from "react";

import { urlFor } from "../../client";

const Card = ({ data }) => {
  return (
    <div className="card">
      <img src={urlFor(data.image)} alt="" />
      <div className="project__name">{data.name}</div>
      <div className="project__description">{data.description}</div>
      <div className="cardlink">
        <a href={data.github}>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href={data.live ? data.live : "/"}>
          <ion-icon name="link-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Card;
