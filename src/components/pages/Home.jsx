import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Typewriter from "react-typewriter-effect";
import "../Styles/Home.css";
import profilePic from "../../assets/Profile.jpg"; 

const Home = () => {
  const { language } = useLanguage();

  const downloadCV = () => {
    const fileId = "1VwZNmJs59LKTqsPHHSBHMen0hdW-A7za";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  return (
    <div className="home-container">
      <motion.img
        src={profilePic}
        alt="Profilio nuotrauka"
        className="profile-img"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="name-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {language === "lt" ? "Tavo Vardas" : "Your Name"}
      </motion.h1>

      <Typewriter
        options={{
          strings:
            language === "lt"
              ? [
                  "Front-end programuotojas",
                  "React | Node.js",
                  "UI/UX entuziastas",
                ]
              : ["Front-end Developer", "React | Node.js", "UI/UX enthusiast"],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 50,
        }}
      />

      <motion.button
        onClick={downloadCV}
        className="cv-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        📄 {language === "lt" ? "Atsisiųsti CV" : "Download CV"}
      </motion.button>
    </div>
  );
};

export default Home;
