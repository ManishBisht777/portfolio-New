import React, { useEffect, useState } from "react";
import about2 from "../../assets/about03.png";
import clock from "../../assets/clock.png";
import location from "../../assets/location.png";
import microphone from "../../assets/microphone.png";
import bag from "../../assets/bag.png";

import { urlFor, client } from "../../client";

//commit

const About = () => {
  const [about, setabout] = useState([]);
  const [education, seteducation] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    const educationQuery = '*[_type == "educations"]';

    client.fetch(query).then((data) => {
      setabout(data);

      client.fetch(educationQuery).then((data) => {
        seteducation(data);
      });
    });
  }, []);

  return (
    <section className="about" id="about">
      {about &&
        about.map((aboutinfo) => (
          <div className="basicinfo" key={aboutinfo.name}>
            <div className="imgbx">
              <img src={urlFor(aboutinfo.imgUrl)} alt="about img" />
            </div>
            <div className="info">
              <h2>
                <img src={microphone} alt="microphone" /> about me
              </h2>
              <p>{aboutinfo.name}</p>
              <div className="aboutskill">{aboutinfo.tagline}</div>
              <p>
                india, <span>delhi</span>
              </p>
              <p>
                age: <span>{aboutinfo.age}</span>
              </p>
              <p className="desc">{aboutinfo.description}</p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1ArM9fG7idIXL0j_sVAa7WnO0E5B0uCRK/view?usp=sharing"
                className="btn iconbtn"
              >
                Download CV <ion-icon name="download-outline"></ion-icon>
              </a>
            </div>
          </div>
        ))}

      <div className="eduinfo">
        <div className="edubox">
          <h2 className="boxheading">
            <img src={bag} alt="bag" /> education
          </h2>

          {education &&
            education.map((course) => (
              <div className="course" key={course.name}>
                <h2 className="course__name">{course.name}</h2>
                <div className="courseinfo">
                  <div className="bx">
                    <img className="roundbtn" src={location} alt="" />
                    <p>{course.location}</p>
                  </div>
                  <div className="bx">
                    <img className="roundbtn" src={clock} alt="" />
                    <p>{course.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="imgbx">
          <img src={about2} alt="about img" />
        </div>
      </div>
    </section>
  );
};

export default About;
