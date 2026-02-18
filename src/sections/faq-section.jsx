import SectionTitle from '../components/section-title';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'What services do you offer?',
            answer: "I specialize in Full Stack Web Development, UI/UX Design, and Custom Software Solutions using React, Node.js, and modern tools.",
        },
        {
            question: 'What is your typical project timeline?',
            answer: 'Timelines vary based on complexity. A simple landing page might take 3-5 days, while a full web app could take 2-4 weeks.',
        },
        {
            question: 'Do you offer post-launch support?',
            answer: 'Yes, I provide maintenance packages to ensure your website remains secure, updated, and performing optimally.',
        },
        {
            question: 'What is your pricing model?',
            answer: 'I offer both project-based (fixed price) and hourly rates depending on the nature of the work. Check the Pricing section for packages.',
        },
        {
            question: 'Can you redesign an existing website?',
            answer: "Absolutely! I can audit your current site and propose a modernization plan to improve performance and aesthetics.",
        },
        {
            question: 'How do we communicate during the project?',
            answer: 'I use Discord, Slack, or Email for updates and schedule regular check-in calls to ensure we stay aligned.',
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