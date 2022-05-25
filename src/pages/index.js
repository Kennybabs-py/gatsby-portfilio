import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Header pageTitle="Home" />
      <div className="intro">
        <StaticImage
          alt="photo of kenny longing for the future"
          src="../images/displaypicture2.jpg"
          className="intro-image"
        />

        <div className="intro-text">
          <span>Kehinde Babalola</span>
        </div>
      </div>
      <div className="what-i-do">
        <header>
          <h3>Who I am &#38; what I do</h3>
        </header>
        <div className="texts">
          Hi, I'm a <span>Frontend Developer</span> who employs modern
          technologies to build responsive websites.
        </div>
        <div className="btn-container">
          <button>Download Resume</button>
        </div>
      </div>

      <div className="skills-container">
        <header>
          <h3>Skills</h3>
        </header>
        <div className="texts">
          <ul>
            <li>
              <span>html5</span>
            </li>
            <li>
              <span>css3</span>
            </li>
            <li>
              <span>scss</span>
            </li>
            <li>
              <span>javascript</span>
            </li>
            <li>
              <span>typescript</span>
            </li>
            <li>
              <span>react-js</span>
            </li>
            <li>
              <span>Next-js</span>
            </li>
            <li>
              <span>gastby-js</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="projects"></div>
      <Footer />
    </main>
  );
};

export default IndexPage;
