import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import calander from "../../assets/calander.png";

import { client } from "../../client";

const Project = () => {
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setprojects(data);
    });
  }, []);

  return (
    <section className="projects">
      <h2 className="boxheading">
        <img src={calander} alt="calander" /> projects
      </h2>

      <div className="projects__wrapper">
        {projects &&
          projects.map((project) => <Card key={project.name} data={project} />)}
      </div>

      <button className="btn iconbtn">
        <ion-icon name="barcode-outline"></ion-icon> Show more
      </button>
    </section>
  );
};

export default Project;
