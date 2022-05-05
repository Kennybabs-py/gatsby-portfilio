import * as React from "react";
import Header from "../components/header";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <main>
      <Header pageTitle="Home" />
      <h1>Hello</h1>
      <StaticImage
        alt="photo of kenny longing for the future"
        src="../images/displaypicture.jpg"
      />
    </main>
  );
};

export default IndexPage;
