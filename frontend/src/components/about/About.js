import React from "react";
import aboutimg from "../../assets/pic1.png";
import about2 from "../../assets/about03.png";
import clock from "../../assets/clock.png";
import location from "../../assets/location.png";
import microphone from "../../assets/microphone.png";
import bag from "../../assets/bag.png";

const About = () => {
  return (
    <section className="about">
      <div className="basicinfo">
        <div className="imgbx">
          <img src={aboutimg} alt="about img" />
        </div>
        <div className="info">
          <h2>
            <img src={microphone} alt="microphone" /> about me
          </h2>
          <p>manish bisht</p>
          <div className="aboutskill">
            frontend developer, fullstack develoepr
          </div>
          <p>
            india, <span>delhi</span>
          </p>
          <p>
            age: <span>19</span>
          </p>

          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi eum
            obcaecati laborum dolorem et ipsum perferendis. Corporis quia magni
            dolores.
          </p>

          <a className="btn iconbtn" href="/">
            download cv <ion-icon name="download-outline"></ion-icon>
          </a>
        </div>
      </div>

      <div className="eduinfo">
        <div className="edubox">
          <h2 className="boxheading">
            <img src={bag} alt="bag" /> education
          </h2>

          <div className="course">
            <h2 className="course__name">bsc h computer science</h2>
            <div className="courseinfo">
              <div className="bx">
                <img className="roundbtn" src={location} alt="" />
                <p>Keshav mahavidayalaya , delhi</p>
              </div>
              <div className="bx">
                <img className="roundbtn" src={clock} alt="" />
                <p>may 2023</p>
              </div>
            </div>
          </div>
          <div className="course">
            <h2 className="course__name">bsc h computer science</h2>
            <div className="courseinfo">
              <div className="bx">
                <img className="roundbtn" src={location} alt="" />
                <p>Keshav mahavidayalaya , delhi</p>
              </div>
              <div className="bx">
                <img className="roundbtn" src={clock} alt="" />
                <p>may 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className="imgbx">
          <img src={about2} alt="about img" />
        </div>
      </div>
    </section>
  );
};

export default About;
