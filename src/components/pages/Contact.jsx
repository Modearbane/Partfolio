import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import { FaEnvelope, FaPhone, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../Styles/Contacts.css";

const Contact = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={`contact-container ${theme}`}>
      <h2 className="contact-title">{language === "lt" ? "Susisiekime" : "Contact Me"}</h2>
      <div className="contact-info">
        <a href="mailto:tavoemail@gmail.com" className="contact-item">
          <FaEnvelope className="icon" /> tavoemail@gmail.com
        </a>
        <a href="tel:+37060000000" className="contact-item">
          <FaPhone className="icon" /> +370 600 00000
        </a>
        <a href="https://www.linkedin.com/in/tavo-profilis" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        <a href="https://www.facebook.com/tavo-profilis" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaFacebook className="icon" /> Facebook
        </a>
      </div>
    </div>
  );
};

export default Contact;
