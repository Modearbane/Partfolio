import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import { useState, useEffect } from "react";
import "../Styles/Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="home-container">
      {/* Tamsaus režimo perjungimo mygtukas */}
      <motion.button 
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {darkMode ? "☀️ Šviesus režimas" : "🌙 Tamsus režimas"}
      </motion.button>

      {/* Profilio nuotrauka */}
      <motion.img 
        src="https://via.placeholder.com/200" 
        alt="Profilio nuotrauka"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Vardas su animacija */}
      <motion.h1 
        className="name-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tavo Vardas
      </motion.h1>
      
      {/* Typewriter efektas */}
      <Typewriter
        text={["Front-end Developer", "React | Node.js", "UI/UX entuziastas"]}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1500}
        loop
      />
      
      {/* CV mygtukas su hover efektu */}
      <motion.a 
        href="/cv.pdf" 
        download 
        className="cv-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        📄 Atsisiųsti CV
      </motion.a>
    </div>
  );
};

export default Home;
