import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-5"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-bold mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-3 inline-block hover:underline"
      >
        Peržiūrėti projektą →
      </a>
    </motion.div>
  );
};

export default ProjectCard;
