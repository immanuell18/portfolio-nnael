import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Footer() {
    const links = [
        { name: 'Terms of Service', href: '/legal' },
        { name: 'Privacy Policy', href: '/legal' },
    ];
    return (
        <motion.footer className="flex flex-col items-center px-4 md:px-16 lg:px-24 justify-center w-full pt-16 mt-40 glass border-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <a href='/' className='text-2xl font-bold tracking-tighter'>
                Portfolio.
            </a>

            <div className="flex flex-wrap items-center justify-center gap-8 py-8">
                {links.map((link, index) => (
                    <Link key={index} to={link.href} className='transition hover:text-gray-300'>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="flex items-center gap-6 pb-6">
                <a href="https://instagram.com/nuelg_" target="_blank" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@nuelg_" target="_blank" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-music-2"
                    >
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                </a>
                <a href="https://github.com/immanuell18" target="_blank" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <GithubIcon />
                </a>
            </div>
            <hr className="w-full border-white/20 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4">
                <p>Designed within seconds.</p>
                <p>Copyright © 2026 • Portofolio Nael</p>
            </div>
        </motion.footer>
    );
};