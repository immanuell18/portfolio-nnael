import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const links = [
        { name: 'Terms of Service', href: '#terms-of-service' },
        { name: 'Privacy Policy', href: '#privacy-policy' },
        { name: 'Security', href: '#security' },
        { name: 'Sitemap', href: '#sitemap' },
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
                    <a key={index} href={link.href} className='transition hover:text-gray-300'>
                        {link.name}
                    </a>
                ))}
            </div>
            <div className="flex items-center gap-6 pb-6">
                <a href="https://instagram.com/nuelg_" target="_blank" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    <InstagramIcon />
                </a>
                <a href="https://www.tiktok.com/@nuelg_" target="_blank" className="hover:-translate-y-0.5 text-gray-200 transition-all duration-300">
                    {/* Lucide doesn't have TikTok icon by default, using Twitter/X icon as placeholder or text */}
                    <span className="font-bold">TT</span>
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