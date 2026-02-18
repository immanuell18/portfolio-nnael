import { motion } from "framer-motion";
import { ArrowLeftIcon } from "lucide-react";

export default function Contact() {
    return (
        <section className="flex flex-col min-h-screen px-4 md:px-16 lg:px-24">
            <a href="/" className="fixed top-8 left-8 btn glass flex items-center gap-2">
                <ArrowLeftIcon className="size-4" /> Back to Home
            </a>

            <div className="flex-1 flex flex-col items-center justify-center py-20">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl w-full glass p-8 rounded-2xl"
                >
                    <h1 className="text-3xl font-bold mb-2 text-center">Let's Work Together</h1>
                    <p className="text-gray-300 text-center mb-8">
                        Have a project in mind? Fill out the form below or send me an email directly.
                    </p>

                    <form action="mailto:ellrz1718@gmail.com" method="post" enctype="text/plain" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Name</label>
                                <input required type="text" name="name" placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1">Email</label>
                                <input required type="email" name="email" placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">Service Required</label>
                            <select name="service" className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition text-white/70">
                                <option>Video Editing</option>
                                <option>Web Development</option>
                                <option>IT Support</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1">Message</label>
                            <textarea required name="message" rows="5" placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/30 transition resize-none" />
                        </div>

                        <button type="submit" className="w-full btn bg-white text-black hover:bg-white/90 font-semibold py-3">
                            Send Message
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-sm text-gray-400">Prefer direct email?</p>
                        <a href="mailto:ellrz1718@gmail.com" className="text-white hover:underline mt-1 block">
                            ellrz1718@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
