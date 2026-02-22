import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Website",
    description:
      "A responsive movie browsing app with search functionality and dynamic UI built using React.",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills, and smooth animations using Framer Motion.",
    link: "#"
  },
  {
    title: "Landing Page",
    description:
      "Modern responsive landing page with clean UI and optimized performance.",
    link: "#"
  }
];

const Project = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My Projects
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-neutral-400 mb-6">
                {project.description}
              </p>

              <a
                href={project.link}
                className="text-white underline hover:text-neutral-400 transition"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;