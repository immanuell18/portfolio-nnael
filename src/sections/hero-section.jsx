import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {

    return (
        <>
            <motion.div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none"
                initial={{ opacity: 0.4 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </motion.div>
            <motion.section className="flex flex-col items-center">
                <motion.div className="flex items-center gap-2 mt-6 md:mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <p className="text-sm font-medium text-gray-300">Student & Creative</p>
                    <div className="size-1 bg-white rounded-full opacity-50"></div>
                    <p className="text-sm font-medium text-green-400">Open to Work</p>
                </motion.div>
                <motion.h1 className="text-center text-4xl/tight md:text-6xl/tight mt-4 font-bold tracking-tight max-w-4xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Web Developer <span className="text-white/30">&</span> <br /> Video Editor.
                </motion.h1>
                <motion.p className="text-center text-gray-400 text-lg max-w-lg mt-6 px-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    Hi, I'm <span className="text-white font-semibold">Nael</span>. A vocational student (SMK) specializing in PHP, Laravel, and Motion Graphics.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-3 mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <button className="btn max-md:w-full glass py-3">
                        View Projects
                    </button>
                    <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3">
                        <PlayCircleIcon className="size-4.5" />
                        Contact Me
                    </button>
                </motion.div>
            </motion.section>
        </>
    );
}