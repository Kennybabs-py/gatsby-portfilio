import React, { useState } from "react";
import { Link } from "gatsby";
import "../sass/App.scss";

const Header = ({ pageTitle }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <title>{pageTitle}</title>
      <nav>
        <Link to="/" className="logo-name">
          <span>Kenny.dev</span>
        </Link>
        <div
          className={showMenu ? "hamburger-open" : "hamburger"}
          onClick={handleToggle}
        ></div>
      </nav>
      <div className={showMenu ? "menu-open" : "menu"}>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="">
            <li>Projects</li>
          </Link>
          <Link to="">
            <li>Contact me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
