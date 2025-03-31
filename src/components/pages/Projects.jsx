import React, { useState } from "react";
import ProjectCard from "../Projectcard";
import "../Styles/Projects.css"; // Stiliai

const projectsData = [
  {
    title: "Portfolio",
    description: "Asmeninis portfolio su animacijomis ir interaktyviais elementais.",
    image: "https://via.placeholder.com/300",
    technologies: ["React", "CSS", "Framer Motion"],
    link: "https://github.com/tavo-vardas/portfolio",
  },
  {
    title: "E-Komercijos Svetainė",
    description: "Pilna e-komercijos sistema su prekių katalogu ir pirkinių krepšeliu.",
    image: "https://via.placeholder.com/300",
    technologies: ["React", "Node.js", "MySQL"],
    link: "https://github.com/tavo-vardas/ecommerce",
  },
  {
    title: "Kolt Paspirtukų Valdymas",
    description: "SPA aplikacija paspirtukų valdymui, naudojant localStorage.",
    image: "https://via.placeholder.com/300",
    technologies: ["React", "CSS"],
    link: "https://github.com/tavo-vardas/kolt",
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("Visi");

  const filteredProjects = projectsData.filter((project) =>
    filter === "Visi" || project.technologies.includes(filter)
  );

  return (
    <div className="projects-container">
      <h1>Mano Projektai</h1>
      
      {/* Filtravimas */}
      <div className="filter-buttons">
        {["Visi", "React", "Node.js", "MySQL", "CSS"].map((tech) => (
          <button key={tech} onClick={() => setFilter(tech)}>
            {tech}
          </button>
        ))}
      </div>

      {/* Projektų sąrašas */}
      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

