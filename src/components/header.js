import React from "react";
import { Link } from "gatsby";
import "../sass/App.scss";

const Header = ({ pageTitle }) => {
  return (
    <div className="header">
      <title>{pageTitle}</title>
      <nav>
        <Link to="/" className="logo-name">
          <div>
            <h3>Kenny</h3>
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
        <div className="hamburger"></div>
      </nav>
    </div>
  );
};

export default Header;
