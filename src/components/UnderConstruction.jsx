import React from "react";
import { motion } from "framer-motion";
import {
    Modal,
    ModalTrigger,
    ModalBody,
    ModalContent,
    ModalFooter,
} from "../components/ui/AnimatedModal";
import { MdOutlineUpdate } from "react-icons/md";
import { AuroraBackground } from "./ui/AuroraBackground";

/* Motion variants */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const UnderConstruction = () => {
    return (
        <AuroraBackground>
            <div className="min-h-screen flex justify-center items-center px-4">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="relative flex flex-col items-center text-center"
                >
                    {/* 503 with overlayed status text */}
                    <motion.h1
                        variants={item}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-[10rem] sm:text-[14rem] md:text-[22rem] text-neutral-700 dark:text-white/10 leading-none font-extrabold select-none relative"
                    >
                        503
                        <motion.p
                            variants={item}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center translate-y-5 md:translate-y-10
                                       whitespace-nowrap text-xl sm:text-2xl md:text-5xl 
                                      text-sky-600 dark:text-sky-300 font-bold uppercase tracking-widest"
                        >
                            Development in Progress
                        </motion.p>
                    </motion.h1>

                    {/* Supporting text */}
                    <motion.p
                        variants={item}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="mt-8 sm:mt-10 text-black dark:text-white/80 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-3xl px-2"
                    >
                        I'm currently giving my portfolio a glow up, modern vibes, smooth UI to showcase my work and skills .
                        Trust me, you’ll want to stick around for the{" "}
                        <span className="font-bold uppercase text-base sm:text-xl text-sky-400">grand reveal</span>.
                    </motion.p>

                    {/* Trigger */}
                    <Modal>
                        <ModalTrigger>
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2 flex items-center gap-2 mx-auto cursor-pointer font-plus text-white"
                            >
                                <MdOutlineUpdate size={22} />
                                <p className="text-lg sm:text-xl font-bold">View Incoming Updates</p>
                            </motion.span>
                        </ModalTrigger>

                        <ModalBody>
                            <ModalContent>
                                <h4 className="text-base sm:text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6 sm:mb-8">
                                    What’s Coming Next ✨
                                </h4>

                                {/* Cards - keep exactly as is */}
                                <div className="flex justify-center items-center">
                                    {images.map((image, idx) => (
                                        <motion.div
                                            key={idx}
                                            style={{
                                                rotate: Math.random() * 20 - 10,
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 0,
                                                zIndex: 100,
                                            }}
                                            whileTap={{
                                                scale: 1.1,
                                                rotate: 0,
                                                zIndex: 100,
                                            }}
                                            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 border border-neutral-100 shrink-0 overflow-hidden"
                                        >
                                            <img
                                                src={image}
                                                alt="preview"
                                                className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover"
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="py-6 sm:py-10 flex flex-wrap gap-2 sm:gap-4 justify-center max-w-xs sm:max-w-xl mx-auto">
                                    {features.map((feature, idx) => (
                                        <motion.span
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm md:text-lg"
                                        >
                                            {feature}
                                        </motion.span>
                                    ))}
                                </div>
                            </ModalContent>

                            <ModalFooter className="justify-center">
                                <span className="text-xs sm:text-sm text-sky-500">
                                    More updates coming out soon 🚀
                                </span>
                            </ModalFooter>
                        </ModalBody>
                    </Modal>
                </motion.div>
            </div>
        </AuroraBackground>
    );
};

/* Updated images */
const images = [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1200&auto=format&fit=crop",
];

const features = [
    "Modern UI Architecture",
    "Framer Motion Animations",
    "Tailwind CSS",
    "Optimized React Components",
    "Client-side Routing",
    "Performance Optimization",
    "Mobile Responsiveness",
];

export default UnderConstruction;
