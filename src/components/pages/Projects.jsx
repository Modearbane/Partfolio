import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "../ProjectCard";
import "../Styles/Projects.css";

const projectsData = [
  {
    title: { lt: "Portfolio", en: "Portfolio" },
    description: { lt: "Asmeninis portfolio su animacijomis.", en: "Personal portfolio with animations." },
    image: "https://via.placeholder.com/300",
    technologies: ["React", "CSS", "Framer Motion"],
    link: "https://github.com/tavo-vardas/portfolio",
  },
  {
    title: { lt: "E-Komercijos Svetainė", en: "E-Commerce Website" },
    description: { lt: "Pilna e-komercijos sistema.", en: "A complete e-commerce system." },
    image: "https://via.placeholder.com/300",
    technologies: ["React", "Node.js", "MySQL"],
    link: "https://github.com/tavo-vardas/ecommerce",
  },
];

const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [filter, setFilter] = useState("Visi");

  const filteredProjects = projectsData.filter((project) =>
    filter === "Visi" || project.technologies.includes(filter)
  );

  return (
    <div className={`projects-container ${theme}`}>
      <h1>{language === "lt" ? "Mano Projektai" : "My Projects"}</h1>
      
      <div className="filter-buttons">
        {["Visi", "React", "Node.js", "MySQL", "CSS"].map((tech) => (
          <button key={tech} onClick={() => setFilter(tech)}>
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} title={project.title[language]} description={project.description[language]} image={project.image} technologies={project.technologies} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
