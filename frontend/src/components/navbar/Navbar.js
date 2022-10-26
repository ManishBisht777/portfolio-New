import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">{"<> manish </>"}</div>
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
