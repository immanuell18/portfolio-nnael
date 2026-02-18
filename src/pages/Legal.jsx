import { motion } from "framer-motion";
import { ArrowLeftIcon, ShieldCheckIcon, FileTextIcon, LockIcon } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Legal() {
    return (
        <section className="min-h-screen bg-black text-gray-300 px-4 py-12 md:py-20 relative overflow-hidden font-sans">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 size-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 -right-40 size-[400px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center justify-between pointer-events-none">
                <Link to="/" className="pointer-events-auto btn glass flex items-center gap-2 text-white/90 hover:text-white transition group border border-white/5 bg-black/20 backdrop-blur-md">
                    <ArrowLeftIcon className="size-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto mt-16 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 tracking-tight pb-2">
                        Legal & Policies
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                        Transparansi adalah kunci dalam kerja sama profesional. Berikut adalah standar operasional dan privasi dalam layanan saya.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Column 1: Terms of Service */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative glass p-8 rounded-2xl border border-white/10 h-full">
                                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                    <div className="p-3 bg-purple-500/10 rounded-xl">
                                        <FileTextIcon className="size-6 text-purple-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Terms of Service</h2>
                                </div>
                                <ul className="space-y-6">
                                    <li className="flex gap-4 items-start group/item">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                                        <div>
                                            <strong className="text-white block mb-1">Pembayaran (DP 50%)</strong>
                                            <p className="text-sm text-gray-400 leading-relaxed">Pengerjaan dimulai setelah Down Payment diterima. Pelunasan wajib dilakukan sebelum serah terima file final.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start group/item">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                                        <div>
                                            <strong className="text-white block mb-1">Revisi (Max 2x)</strong>
                                            <p className="text-sm text-gray-400 leading-relaxed">Termasuk 2x revisi minor. Perubahan konsep total atau revisi tambahan dikenakan biaya extra.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4 items-start group/item">
                                        <span className="mt-1.5 size-1.5 rounded-full bg-purple-500 shrink-0 group-hover/item:scale-150 transition-transform" />
                                        <div>
                                            <strong className="text-white block mb-1">Waktu & Deadline</strong>
                                            <p className="text-sm text-gray-400 leading-relaxed">Estimasi waktu disepakati di awal. Keterlambatan materi dari klien dapat menggeser deadline.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 2: Privacy Policy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="relative group h-full">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative glass p-8 rounded-2xl border border-white/10 h-full flex flex-col">
                                <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                                    <div className="p-3 bg-green-500/10 rounded-xl">
                                        <ShieldCheckIcon className="size-6 text-green-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white tracking-tight">Privacy Policy</h2>
                                </div>
                                <div className="space-y-6 flex-1">
                                    <p className="text-gray-300 leading-relaxed">
                                        Saya sangat menghargai privasi dan keamanan data Anda. Informasi yang Anda berikan hanya digunakan untuk keperluan profesional.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5">
                                            <LockIcon className="size-4 text-green-400 shrink-0" />
                                            <span className="text-sm text-gray-300">Data Project (Rahasia & Aman)</span>
                                        </div>
                                        <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5">
                                            <LockIcon className="size-4 text-green-400 shrink-0" />
                                            <span className="text-sm text-gray-300">Tidak ada Spam Email</span>
                                        </div>
                                        <div className="flex gap-3 items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition border border-white/5">
                                            <LockIcon className="size-4 text-green-400 shrink-0" />
                                            <span className="text-sm text-gray-300">Data Tidak Dijual ke Pihak Ketiga</span>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-white/5">
                                        <p className="text-xs text-gray-500">Last updated: February 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-sm text-gray-500 max-w-md mx-auto">
                        Dengan menggunakan layanan ini, Anda dianggap telah membaca dan menyetujui syarat & ketentuan yang berlaku.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
