import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./Styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Tamsaus režimo perjungimas */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Navigacijos nuorodos */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              {language === "lt" ? "Pagrindinis" : "Home"}
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
              {language === "lt" ? "Apie mane" : "About"}
            </Link>
          </li>
          <li>
            <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
              {language === "lt" ? "Projektai" : "Projects"}
            </Link>
          </li>
          <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
              {language === "lt" ? "Kontaktai" : "Contact"}
            </Link>
          </li>
        </ul>

        {/* Kalbos keitimas */}
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "lt" ? "EN 🇬🇧" : "LT 🇱🇹"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
