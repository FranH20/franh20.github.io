import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import "./About.css";
import DesktopImg from "../../assets/images/desktop.jpg";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="about__container">
          <img
            className="about__image"
            src={DesktopImg}
            alt="desktop image..."
          />
          <article className="about__information">
            <TitleSection
              title="about me"
              subtitle="A dedicated Full Stack Web Developer based in Tacna, Perú"
            />
            <p className="about__description">
              Hello! My name is Franklin Carlos Huichi Contreras, and I'm a Full
              Stack web developer. I specialize in Java, JavaScript, Spring
              Boot, Angular, and ReactJs. My focus is on creating responsive web
              pages and software systems using REST. Currently, I have
              professional experience with these technologies. I look forward to
              working together and creating amazing web solutions!
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
