import React, { useEffect, useState } from "react";

import tool from "../../assets/tool.png";
import { urlFor, client } from "../../client";

const Skill = () => {
  const [skills, setskills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setskills(data);
    });
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="boxheading">
        <img src={tool} alt="tools and skills" /> skills and tools
      </h2>

      <div className="skillbx">
        {skills &&
          skills.map((skill) => (
            <div key={skill.name} className="skillimg">
              <img src={urlFor(skill.icon)} alt="" />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skill;
