import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="nav-container">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              {language === "lt" ? "Pagrindinis" : "Home"}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              {language === "lt" ? "Apie mane" : "About"}
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              {language === "lt" ? "Projektai" : "Projects"}
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              {language === "lt" ? "Kontaktai" : "Contact"}
            </Link>
          </li>
        </ul>

        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "lt" ? "EN 🇬🇧" : "LT 🇱🇹"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
