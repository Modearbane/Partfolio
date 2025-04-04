import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import "../Styles/Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    category: "HTML",
    image: "/images/portfolio.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce App",
    category: "CSS",
    image: "/images/ecommerce.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Weather App",
    category: "JavaScript",
    image: "/images/weather.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Task Manager",
    category: "React",
    image: "/images/task-manager.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Database Dashboard",
    category: "MySQL",
    image: "/images/database.jpg",
    link: "#",
  },
];

const categories = [
  { key: "All", lt: "Visi", en: "All" },
  { key: "HTML", lt: "HTML", en: "HTML" },
  { key: "CSS", lt: "CSS", en: "CSS" },
  { key: "JavaScript", lt: "JavaScript", en: "JavaScript" },
  { key: "React", lt: "React", en: "React" },
  { key: "MySQL", lt: "MySQL", en: "MySQL" },
];

const Projects = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className={`projects-container ${theme}`}>
      <h1 className="projects-title">
        {language === "lt" ? "Mano Projektai" : "My Projects"}
      </h1>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={selectedCategory === cat.key ? "active" : ""}
            onClick={() => setSelectedCategory(cat.key)}
          >
            {language === "lt" ? cat.lt : cat.en}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {language === "lt" ? "Žiūrėti projektą" : "View Project"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
