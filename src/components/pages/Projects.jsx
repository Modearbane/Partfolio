import ProjectCard from "../Projectcard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-parduotuvė",
    description: "Sukurta naudojant React ir Firebase.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tavo-projektas",
  },
  {
    title: "Portfolio",
    description: "Asmeninė portfolio svetainė.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tavo-projektas",
  },
  {
    title: "Kolt Scooter App",
    description: "CRUD sistema elektriniams paspirtukams valdyti.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tavo-projektas",
  },
];


const Projects = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-10 text-center"
      >
        <h2 className="text-3xl font-bold">Projektai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Projektai */}
        </div>
      </motion.div>
    );
  };
export default Projects;
