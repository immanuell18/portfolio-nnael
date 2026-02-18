import { motion } from "framer-motion";
import { ArrowLeftIcon, SendIcon, CheckCircleIcon, Loader2 } from "lucide-react";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
    const [selectedService, setSelectedService] = useState('Web Development');
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus('submitting');

        const formData = new FormData(e.target);
        // Add selected service manually since it's not a standard input
        formData.append('service', selectedService);
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        try {
            const response = await fetch("https://formsubmit.co/ajax/ellrz1718@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setFormStatus('success');
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        }
    };

    const services = [
        "Web Development",
        "Video Editing",
        "IT Support",
        "Other"
    ];

    if (formStatus === 'success') {
        return (
            <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 size-96 bg-purple-600 rounded-full blur-[150px] opacity-20" />
                    <div className="absolute bottom-1/4 left-1/4 size-96 bg-blue-600 rounded-full blur-[150px] opacity-20" />
                </div>

                <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition z-50">
                    <ArrowLeftIcon className="size-4" /> Back to Home
                </Link>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="max-w-md w-full glass p-10 rounded-2xl text-center border border-white/10"
                >
                    <div className="size-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircleIcon className="size-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-gray-300 mb-8">
                        Thanks for reaching out! I've received your message and will get back to you as soon as possible.
                    </p>
                    <Link to="/" className="btn bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-lg inline-block transition">
                        Back to Home
                    </Link>
                </motion.div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-black text-white flex flex-col lg:flex-row">
            {/* Left Side - Form */}
            <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-20 relative z-10">
                <Link to="/" className="absolute top-8 left-8 lg:top-12 lg:left-12 flex items-center gap-2 text-sm text-gray-400 hover:text-white transition">
                    <ArrowLeftIcon className="size-4" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md w-full mx-auto mt-16 lg:mt-0"
                >
                    <div className="mb-10">
                        <h1 className="text-4xl font-bold tracking-tight mb-3">Let's start a project</h1>
                        <p className="text-gray-400">
                            Interested in working together? Fill out the form below with some info about your project.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">First name</label>
                                <input required type="text" name="first_name" placeholder="John"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300">Last name</label>
                                <input required type="text" name="last_name" placeholder="Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">Email</label>
                            <input required type="email" name="email" placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">Service Required</label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {services.map((service) => (
                                    <div
                                        key={service}
                                        onClick={() => setSelectedService(service)}
                                        className={`cursor-pointer rounded-lg border px-4 py-3 flex items-center justify-between transition-all duration-200 ${selectedService === service ? 'bg-purple-500/10 border-purple-500 text-purple-400' : 'bg-white/5 border-white/10 hover:border-white/20 text-gray-300'}`}
                                    >
                                        <span className="text-sm font-medium">{service}</span>
                                        {selectedService === service && <CheckCircleIcon className="size-4" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-300">Message</label>
                            <textarea required name="message" rows="4" placeholder="Tell me about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition resize-none" />
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="w-full btn bg-white text-black hover:bg-gray-200 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {formStatus === 'submitting' ? (
                                <>
                                    <Loader2 className="size-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <SendIcon className="size-4" />
                                </>
                            )}
                        </button>
                        {formStatus === 'error' && (
                            <p className="text-red-400 text-sm text-center">Something went wrong. Please try again later.</p>
                        )}
                    </form>
                </motion.div>
            </div>

            {/* Right Side - Visuals */}
            <div className="hidden lg:flex flex-1 relative bg-[#0a0a0a] items-center justify-center p-12 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                {/* Floating Gradients */}
                <div className="absolute top-1/4 right-1/4 size-64 bg-purple-600 rounded-full blur-[100px] opacity-60 animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 size-64 bg-blue-600 rounded-full blur-[100px] opacity-60 animate-pulse" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative z-10 max-w-lg glass p-8 rounded-2xl border border-white/10"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" alt="Client" className="size-12 rounded-full object-cover" />
                        <div>
                            <h4 className="font-bold text-white">Isabella Kim</h4>
                            <p className="text-sm text-gray-400">Founder & CEO</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-200 italic leading-relaxed">
                        "Clean, elegant, and efficient. Nael's work is a dream for any modern business looking to establish a strong digital presence."
                    </p>
                    <div className="mt-6 flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className="size-5 text-yellow-500 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
