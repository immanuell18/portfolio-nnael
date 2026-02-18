import { motion } from "framer-motion";
import { ArrowLeftIcon, SendIcon } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email'); // included for context in body, though mail client sends from user's email
        const service = formData.get('service');
        const message = formData.get('message');

        const subject = `Portfolio Inquiry: ${service} - ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`;

        window.location.href = `mailto:ellrz1718@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <section className="relative flex flex-col min-h-screen px-4 md:px-16 lg:px-24 overflow-hidden">
            {/* Background Gradients matching Home */}
            <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
            </div>

            <Link to="/" className="fixed top-8 left-8 btn glass flex items-center gap-2 z-50">
                <ArrowLeftIcon className="size-4" /> Back to Home
            </Link>

            <div className="flex-1 flex flex-col items-center justify-center py-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full glass p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl"
                >
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-3 tracking-tight">Let's Work Together</h1>
                        <p className="text-gray-200">
                            Fill out the form below to send me an email directly.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-gray-200">Name</label>
                                <input required type="text" name="name" placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-gray-200">Email</label>
                                <input required type="email" name="email" placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-gray-200">Service Required</label>
                            <div className="relative">
                                <select name="service" className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition cursor-pointer">
                                    <option className="bg-gray-900 text-white">Video Editing</option>
                                    <option className="bg-gray-900 text-white">Web Development</option>
                                    <option className="bg-gray-900 text-white">IT Support</option>
                                    <option className="bg-gray-900 text-white">Other</option>
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-white/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-gray-200">Message</label>
                            <textarea required name="message" rows="5" placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition resize-none" />
                        </div>

                        <button type="submit" className="w-full btn bg-white text-black hover:bg-gray-200 hover:scale-[1.01] active:scale-[0.99] font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                            Send Email
                            <SendIcon className="size-4" />
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-white/40">
                            Or email me directly at <a href="mailto:ellrz1718@gmail.com" className="text-white hover:underline decoration-white/30 underline-offset-4 transition">ellrz1718@gmail.com</a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
