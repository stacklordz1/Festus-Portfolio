import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Get In Touch
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 focus:outline-none focus:border-neutral-600"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 focus:outline-none focus:border-neutral-600"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 focus:outline-none focus:border-neutral-600"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-neutral-200 transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;