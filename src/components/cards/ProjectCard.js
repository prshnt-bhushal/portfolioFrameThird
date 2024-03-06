import React from 'react';

function ProjectCard({ project }) {
  const baseImageUrl = '../../assets/images/projects/';

  return (
    <div className="projectCard">
      <img
        src={baseImageUrl + project.image}
        alt={project.title}
        className="projectImage"
      />
      <div className="projectDetails">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
