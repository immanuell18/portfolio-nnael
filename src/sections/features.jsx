import SectionTitle from "../components/section-title";
import { CodeIcon, DatabaseIcon, LayoutIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Features() {

    const refs = useRef([]);

    const featuresData = [
        {
            icon: LayoutIcon,
            title: "Frontend Development",
            description: "Building responsive, accessible, and performant user interfaces with React & Tailwind.",
        },
        {
            icon: DatabaseIcon,
            title: "Backend Development",
            description: "Creating robust APIs and server-side logic using Node.js and SQL/NoSQL databases.",
        },
        {
            icon: CodeIcon,
            title: "Clean Code & Architecture",
            description: "Writing maintainable, scalable, and well-documented code for long-term success.",
        }
    ];

    return (
        <section id="skills" className="mt-32">
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
                        <p className="text-gray-100 line-clamp-2 pb-2">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
