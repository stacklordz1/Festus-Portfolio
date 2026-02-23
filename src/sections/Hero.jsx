import { motion } from "motion/react";
import Pic1 from '../assets/profile1.jpeg';
import Pic2 from '../assets/profile2.jpeg';
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {

  return (
    <section
      id="home"
      className="relative min-h-screen flex mt-50 md:mt-40 flex-col items-center justify-center px-6 text-black dark:text-white"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center  gap-10 md:gap-16">

        {/* Text Section */}
        <div className="flex-1  md:text-left">
          {/* Small Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 border border-white/10
            rounded-2xl bg-black/20 px-4 py-2 mb-6 text-sm md:text-base"
          >
            <span className="h-2.5 w-2.5 bg-green-600 animate-pulse ring-1 ring-green-600/40 rounded-full" />
            Full Stack Developer
          </motion.p>

          {/* Big Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl  font-serif font-bold leading-tight"
          >
            Crafting Clean &
            <span className="text-neutral-400 block">Interactive Experiences</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 md:mt-8 text-neutral-400 text-base sm:text-lg md:text-lg tracking-tight font-medium max-w-xl mx-auto md:mx-0"
          >
            Hi, I’m Festus — a full-stack developer passionate
            about creating functional, secure, beautiful web applications.
            I specialize in React, JavaScript, Node.js, and modern web technologies,
            building scalable, high-performance applications that users love to interact with.
          </motion.p>
        </div>

        {/* CTA */}
        <motion.div></motion.div>


        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end items-center gap-6 relative mt-8 md:mt-0">
          {/* Image 1 */}
          <motion.img
            src={Pic1}
            alt="Festus 1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-36 sm:w-44 md:w-52 object-fit 
            translate-x-6 lg:w-60 transform -rotate-6 border-4 border-neutral-800/80
            hover:rotate-8 transition duration-500 rounded-xl shadow-lg z-20"
          />

          {/* Image 2 */}
          <motion.img
            src={Pic2}
            alt="Festus 2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-36 sm:w-44 md:w-52 lg:w-60 transform object-fit border-4 border-neutral-800/80
            rotate-6 hover:rotate-8 transition duration-500 rounded-xl shadow-lg z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;