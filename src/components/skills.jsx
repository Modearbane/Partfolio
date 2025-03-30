import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟩" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "MySQL", icon: "💾" },
];

const Skills = () => {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold">Įgūdžiai</h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-white shadow-lg p-4 rounded-lg flex flex-col items-center"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-4xl">{skill.icon}</span>
            <p className="mt-2 text-lg font-bold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
