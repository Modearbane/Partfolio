import React from "react";
import "./Styles/Projects.css"; // Stiliai

const ProjectCard = ({ title, description, image, technologies, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Technologijos:</strong> {technologies.join(", ")}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Peržiūrėti projektą
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
