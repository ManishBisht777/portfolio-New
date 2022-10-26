import React from "react";

const Socials = () => {
  return (
    <section className="socials">
      <article className="socialbx">
        <h3>Socials</h3>
        <p>connect with me via various socials handles</p>
        <div className="icon_bx">
          <a href="/" className="icon">
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a href="/" className="icon">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a href="/" className="icon">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Socials;
