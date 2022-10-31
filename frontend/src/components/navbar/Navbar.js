import React, { useState } from "react";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav>
      <div className="logo">{"<> manish </>"}</div>
      <button
        aria-expanded={toggle}
        aria-label="toggle-menu"
        onClick={() => {
          settoggle(!toggle);
        }}
        className="togglebtn"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <ul className="navlinks">
        <li>
          <a aria-label="home" onClick={() => settoggle(false)} href="/">
            home
          </a>
        </li>
        <li>
          <a aria-label="about" onClick={() => settoggle(false)} href="#about">
            about
          </a>
        </li>
        <li>
          <a
            aria-label="projects"
            onClick={() => settoggle(false)}
            href="#projects"
          >
            projects
          </a>
        </li>
        <li>
          <a
            aria-label="skills"
            onClick={() => settoggle(false)}
            href="#skills"
          >
            skills
          </a>
        </li>
        <li>
          <a
            aria-label="contact"
            onClick={() => settoggle(false)}
            href="#contact"
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
