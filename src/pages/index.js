import * as React from "react";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Header pageTitle="Home" />
      <h1>Hello</h1>
      <div className="image">
        <StaticImage
          alt="photo of kenny longing for the future"
          src="../images/displaypicture2.jpg"
          id="display-image"
        />
      </div>
    </main>
  );
};

export default IndexPage;
