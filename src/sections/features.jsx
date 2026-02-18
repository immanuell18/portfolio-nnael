import SectionTitle from "../components/section-title";
import { CodeIcon, DatabaseIcon, LayoutIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: CodeIcon,
            title: "Web Development",
            description: "Experienced in HTML, CSS, JavaScript, and PHP frameworks like Laravel & Phalcon.",
        },
        {
            icon: DatabaseIcon,
            title: "Video Editing",
            description: "Proficient in video editing tools for content creation, highlights, and promotional videos.",
        },
        {
            icon: LayoutIcon,
            title: "UI/UX & Design",
            description: "Designing clean, user-friendly interfaces with a focus on usability and aesthetics.",
        }
    ];

    return (
        <section id="skills" className="mt-12 md:mt-32">
            <SectionTitle
                title="My Expertise"
                description="Core competencies and technical skills that I bring to every project."
            />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 px-6">
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="hover:-translate-y-0.5 p-6 rounded-xl space-y-4 glass max-w-80 w-full"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: index * 0.15,
                            type: "spring",
                            stiffness: 320,
                            damping: 70,
                            mass: 1
                        }}
                        onAnimationComplete={() => {
                            const card = refs.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <feature.icon className="size-8.5" />
                        <h3 className="text-base font-medium text-white">
                            {feature.title}
                        </h3>
                        <p className="text-gray-100 pb-2 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
