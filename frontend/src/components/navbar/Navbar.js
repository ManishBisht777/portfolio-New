import React, { useState } from "react";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav>
      <div className="logo">{"<> manish </>"}</div>
      <button
        aria-expanded={toggle}
        aria-label="toggle-menu"
        onClick={() => settoggle(!toggle)}
        className="togglebtn"
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <ul className="navlinks">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/">about</a>
        </li>
        <li>
          <a href="/">projects</a>
        </li>
        <li>
          <a href="/">skills</a>
        </li>
        <li>
          <a href="/">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
