import React from 'react';
import ProjectCard from '../components/cards/ProjectCard';
import { projectsData } from '../assets/data/projectsData';

function Projects() {
  const projectList = projectsData.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <section id="projects" className="sectionContainer">
      <div className="projectContainer">
        <h2>Projects</h2>
        <p>These are my projects</p>
        <div className="projectContent">{projectList}</div>
      </div>
    </section>
  );
}

export default Projects;
