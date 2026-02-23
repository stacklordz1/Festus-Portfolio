import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TailwindCSS",
  "Node.js",
  "Git",
  "Responsive Design"
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My Skills
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl py-6 text-center font-medium hover:border-neutral-600 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;