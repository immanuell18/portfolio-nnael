import { motion } from "framer-motion";
import { GithubIcon, InstagramIcon } from "lucide-react";

export default function TrustedCompanies() {
    const logos = [
        '/assets/company-logo-1.svg',
        '/assets/company-logo-2.svg',
        '/assets/company-logo-3.svg',
        '/assets/company-logo-4.svg',
        '/assets/company-logo-5.svg',
    ]

    return (
        <motion.section className="mt-14"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
        >
            <p className="py-6 mt-14 text-center">Tech Stack & Tools</p>

            <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-4xl w-full mx-auto py-4 font-semibold text-lg text-white/50" id="logo-container">
                <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" className="h-5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition" alt="Microsoft" />
                    <span>Microsoft</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" className="h-5 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition" alt="VS Code" />
                    <span>VS Code</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <GithubIcon className="size-5" />
                    <span>GitHub</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <InstagramIcon className="size-5" />
                    <span>Instagram</span>
                </div>
                <div className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                    <span>Advan</span>
                </div>
            </div>
        </motion.section>
    )
}