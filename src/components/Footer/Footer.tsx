import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer__container">
          <span className="footer__copyright">
            Copyright © 2023. All rights are reserved
          </span>
          <span className="footer__social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/franklin-huichi/"
            >
              <FaLinkedin size="2rem" color="white" />
            </a>
            <a target="_blank" href="https://github.com/FranH20">
              <FaGithub size="2rem" color="white" />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
