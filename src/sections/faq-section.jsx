import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {

            question: 'Are you available for freelance work?',
            answer: "Yes! I'm available for small video editing projects or simple web development tasks while I complete my studies.",
        },
        {
            question: 'What coding languages are you learning?',
            answer: 'Currently, I am focusing on PHP, Laravel, Phalcon for backend, and HTML, CSS, Javascript for frontend.',
        },
        {
            question: 'Can you build a full website?',
            answer: 'I can build basic websites and I am currently improving my full-stack skills with frameworks like React and Laravel.',
        },
        {
            question: 'What kind of video editing do you do?',
            answer: 'I can edit gaming highlights, social media clips, and simple promotional videos using Premiere Pro or CapCut.',
        },
        {
            question: 'How can I contact you?',
            answer: "You can reach me via Instagram DM or Email. Check the contact links below!",
        },
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="Common Questions" description="Everything you need to know about working with me." />
            <div className='mx-auto mt-12 space-y-4 w-full max-w-xl'>
                {data.map((item, index) => (
                    <motion.div key={index} className='flex flex-col glass rounded-md'
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <h3 className='flex cursor-pointer hover:bg-white/10 transition items-start justify-between gap-4 p-4 font-medium' onClick={() => setIsOpen(isOpen === index ? null : index)}>
                            {item.question}
                            <ChevronDownIcon className={`size-5 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180' : ''}`} />
                        </h3>
                        <p className={`px-4 text-sm/6 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-4 max-h-80' : 'max-h-0'}`}>{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}