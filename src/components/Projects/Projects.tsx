import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import projects from "../../information/portfolio.json";
import CardProject from "../CardProject/CardProject";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <section className="projects" id="projects">
        <div className="projects__container">
          <TitleSection
            title="Portfolio"
            subtitle="Each project is a unique piece of development"
          />
          <div className="projects__cards">
            {projects
              .slice(0)
              .reverse()
              .map((project, index) => (
                <CardProject key={project.id} index={index} {...project} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
