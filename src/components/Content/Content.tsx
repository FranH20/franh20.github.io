import React from "react";
import "./Content.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SpringBootSvg from "../../assets/images/logos/spring-svgrepo-com.svg";
import JavaSvg from "../../assets/images/logos/java-svgrepo-com.svg";
import JavascriptSvg from "../../assets/images/logos/javascript-svgrepo-com.svg";
import ReactJsSvg from "../../assets/images/logos/react-js-svgrepo-com.svg";
import AngularSvg from "../../assets/images/logos/angular-svgrepo-com.svg";
import { CircleIcon } from "../CircleIcon/CircleIcon";
const Content = () => {
  return (
    <>
      <section className="content" id="home">
        <article className="content__presentation">
          <img className="content__photo" />
          <div className="content__information">
            <h1>Full Stack Web Developer 👋🏼</h1>
            <p>
              Hi, I'm Franklin Huichi Contreras. A passionate Web developer
              based in Tacna, Perú 🇵🇪
            </p>
            <span className="content__social">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/franklin-huichi/"
              >
                <FaLinkedin size="2rem" />
              </a>
              <a target="_blank" href="https://github.com/FranH20">
                <FaGithub size="2rem"  />
              </a>
            </span>
          </div>
        </article>
        <article className="content__tech">
          <h3>Tech Stack</h3>
          <div className="content__logos">
            <ul>
              <li>
                <CircleIcon image={SpringBootSvg} alt="Spring boot icon" />
              </li>
              <li>
                <CircleIcon image={JavaSvg} alt="Java icon" />
              </li>
              <li>
                <CircleIcon image={JavascriptSvg} alt="Javascript icon" />
              </li>
              <li>
                <CircleIcon image={ReactJsSvg} alt="React icon" />
              </li>
              <li>
                <CircleIcon image={AngularSvg} alt="Angular icon" />
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};

export default Content;
