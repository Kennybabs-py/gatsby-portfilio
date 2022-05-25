import React from "react";
import "../sass/App.scss";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";

const Footer = () => {
  return (
    <footer>
      <a href="http://twitter.com/thisKehinde">
        {" "}
        <AiOutlineTwitter />
      </a>
      <a href="https://github.com/Kennybabs-py">
        <AiOutlineGithub />
      </a>
      <a href="https://www.linkedin.com/in/kehinde-babalola-691577148/">
        <AiOutlineLinkedin />
      </a>
    </footer>
  );
};

export default Footer;
