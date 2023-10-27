import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import projects from "../../information/portfolio.json";
import components from "../../information/components.json";
import CardProject from "../CardProject/CardProject";
import "./Projects.css";
import ComponentProject from "../ComponentProject/ComponentProject";

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
          <div className="projects__cards">
            <aside className="project__components">
              {components.map((props) => (
                <ComponentProject key={props.id} {...props} />
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
