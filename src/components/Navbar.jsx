import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import "./Styles/Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
      <div className="nav-container">
        {/* Tema perjungimo mygtukas */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        {/* Hamburger meniu mygtukas (mobiliesiems) */}
        <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigacijos nuorodos */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
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

        {/* Kalbos perjungimo mygtukas */}
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "lt" ? "EN 🇬🇧" : "LT 🇱🇹"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
