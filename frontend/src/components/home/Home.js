import React from "react";
import homech from "../../assets/pic2.png";

const Home = () => {
  return (
    <section className="home">
      <article className="homeinfo">
        <h1>
          Hi i am <span>Manish</span>
        </h1>
        <p>
          <span> {"<help>"} </span>
          How can i help you
          <span> {"</help>"} </span>
        </p>
        <div className="homebtn">
          <a className="btn" href="#about">
            explore more
          </a>
          <a className="btn iconbtn" href="/">
            download cv <ion-icon name="download-outline"></ion-icon>
          </a>
        </div>
      </article>
      <img className="homeimg" src={homech} alt="home" />
    </section>
  );
};

export default Home;