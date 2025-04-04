import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../Styles/Contacts.css";

const Contact = () => {
  const { language } = useLanguage();
  const { darkMode } = useTheme();

  return (
    <div className={`contact-container ${darkMode ? "dark-mode" : ""}`}>
      <h2 className="contact-title">
        {language === "lt" ? "Susisiekime" : "Contact Me"}
      </h2>

      <div className="contact-info">
        <a href="mailto:mstreleckis@gmail.com" className="contact-item">
          <FaEnvelope className="icon" /> mstreleckis@gmail.com
        </a>

        <a href="tel:+37064568672" className="contact-item">
          <FaPhone className="icon" /> +370 645 68672
        </a>

        <a
          href="https://www.linkedin.com/in/modestas-streleckis-81a708354/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaLinkedin className="icon" /> LinkedIn
        </a>

        <a
          href="https://www.facebook.com/modestas.streleckis"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <FaFacebook className="icon" /> Facebook
        </a>
      </div>
    </div>
  );
};

export default Contact;
