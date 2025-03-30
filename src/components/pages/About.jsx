import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import "../Styles/About.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="skill-icon html" />, level: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon css" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="skill-icon js" />, level: "80%" },
  { name: "React", icon: <FaReact className="skill-icon react" />, level: "75%" },
  { name: "MySQL", icon: <FaDatabase className="skill-icon sql" />, level: "70%" },
];

const About = () => {
  return (
    <div className="about-container">
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Apie Mane
      </motion.h1>

      <motion.p
        className="about-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Esu aistringas <b>front-end programuotojas</b>, mėgstantis kurti modernias, interaktyvias ir 
        vizualiai patrauklias internetines svetaines. Mano pagrindinės technologijos – <b>React, JavaScript, CSS</b> 
        ir UI/UX dizaino principai.
      </motion.p>

      <div className="skills-container">
        <h2 className="skills-title">Mano Įgūdžiai</h2>
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              {skill.icon} <span>{skill.name}</span>
            </div>
            <motion.div
              className="skill-bar"
              initial={{ width: 0 }}
              animate={{ width: skill.level }}
              transition={{ duration: 1.2, delay: index * 0.3 }}
              style={{ width: skill.level }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
