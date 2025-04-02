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

  // Stebime ekrano dydį, kad pritaikytume dizainą
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Uždarome sidebar, kai keičiame maršrutą
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      {/* Sidebar mygtukas mobiliems */}
      {isMobile && (
        <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Sidebar (tik mobiliesiems) */}
      {isMobile ? (
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
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
      ) : (
        // Navigacija kompiuteriams
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

      {/* Kalbos keitimas per vidurį */}
      <div className="center-controls">
        <button className="language-toggle" onClick={toggleLanguage}>
          {language === "lt" ? "🇱🇹 LT | 🇬🇧 EN" : "🇬🇧 EN | 🇱🇹 LT"}
        </button>
      </div>

      {/* Temos keitimas dešinėje */}
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;
