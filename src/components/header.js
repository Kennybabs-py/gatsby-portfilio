import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div className="logo-name">
          <h3>Kenny</h3>
        </div>
      </Link>
      <div className="hamburger">
        <div></div>
      </div>
    </nav>
  );
};

export default Header;
