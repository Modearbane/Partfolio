import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Styles/Navbar.css";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      setSidebarOpen(false);
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {isMobile && (
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>
      )}

      {isMobile && sidebarOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <div className="sidebar open">
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <FaTimes />
            </button>
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
          </div>
        </div>
      )}

      {!isMobile && (
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
      )}

      <div className="center-controls">
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "lt" ? "🇱🇹 LT | 🇬🇧 EN" : "🇬🇧 EN | 🇱🇹 LT"}
        </button>
      </div>

      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
