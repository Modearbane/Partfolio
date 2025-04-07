import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import "../Styles/Projects.css";
import PlantImage from "../../assets/Plant.png";

// Ikonos
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaThLarge } from "react-icons/fa";

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
    title: "Plant Shop",
    category: "JavaScript",
    image: PlantImage,
    link: "https://modearbane.github.io/ReactPlantShop/",
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
  { key: "All", lt: "Visi", en: "All", icon: <FaThLarge className="icon all" /> },
  { key: "HTML", lt: "HTML", en: "HTML", icon: <FaHtml5 className="icon html" /> },
  { key: "CSS", lt: "CSS", en: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { key: "JavaScript", lt: "JavaScript", en: "JavaScript", icon: <FaJs className="icon js" /> },
  { key: "React", lt: "React", en: "React", icon: <FaReact className="icon react" /> },
  { key: "MySQL", lt: "MySQL", en: "MySQL", icon: <FaDatabase className="icon mysql" /> },
];

const Projects = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(selectedCategory)
        );

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
            <span className="floating-icon">{cat.icon}</span>
            {language === "lt" ? cat.lt : cat.en}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
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
