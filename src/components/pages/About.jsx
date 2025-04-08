import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import "../Styles/About.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" />, level: "60%" },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" />, level: "55%" },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" />, level: "50%" },
  { name: "React", icon: <FaReact className="skill-icon react" />, level: "45%" },
  { name: "MySQL", icon: <FaDatabase className="skill-icon sql" />, level: "40%" },
  { name: "Bootstrap", icon: <FaBootstrap className="skill-icon bootstrap" />, level: "55%" },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon nodejs" />, level: "50%" },
];

const About = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`about-container ${theme}`}>
      <div className="about-inner">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {language === "lt" ? "Apie Mane" : "About Me"}
        </motion.h1>

        <motion.p
          className="junior-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {language === "lt" ? "Pradinis svetainių kūrėjas" : "Beginner Web Developer"}
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {language === "lt"
            ? "Esu pradinis svetainių kūrėjas, dirbantis su HTML, CSS, JavaScript, React, MySQL, Bootstrap ir Node.js. Mėgstu kurti modernias, interaktyvias svetaines, kurios yra pritaikytos įvairiems įrenginiams."
            : "I am a beginner web developer working with HTML, CSS, JavaScript, React, MySQL, Bootstrap, and Node.js. I enjoy building modern, interactive websites that are responsive and user-friendly."}
        </motion.p>

        <div className="skills-container">
          <h2 className="skills-title">
            {language === "lt" ? "Mano Įgūdžiai" : "My Skills"}
          </h2>

          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-info">
                {skill.icon} <span>{skill.name}</span>
              </div>

              <div className="skill-bar-wrapper">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                />
                <span className="skill-percent">{skill.level}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
