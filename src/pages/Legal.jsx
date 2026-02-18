import { motion } from "framer-motion";
import { ArrowLeftIcon, FileTextIcon, ShieldCheckIcon, ClockIcon, DollarSignIcon, RefreshCwIcon, LockIcon } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Legal() {
    return (
        <section className="min-h-screen bg-black text-gray-300 font-sans selection:bg-purple-500/30">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[60%] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <nav className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none">
                <Link to="/" className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all group">
                    <ArrowLeftIcon className="size-4 text-gray-400 group-hover:text-white group-hover:-translate-x-1 transition-all" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">Back to Home</span>
                </Link>
            </nav>

            <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
                        Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">&</span> Policies
                    </h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Standard Operating Procedures (SOP) & Privasi Data untuk kerja sama yang transparan dan aman.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                    {/* Terms of Service Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <FileTextIcon className="size-6 text-purple-400" />
                            <h2 className="text-2xl font-bold text-white">Terms of Service</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                        <DollarSignIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Pembayaran</h3>
                                        <p className="text-sm leading-relaxed text-gray-400">
                                            Wajib DP 50% di awal sebagai tanda jadi. Pelunasan dilakukan setelah project selesai, sebelum serah terima file final (clean files).
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                        <RefreshCwIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Kebijakan Revisi</h3>
                                        <p className="text-sm leading-relaxed text-gray-400">
                                            Maksimal 2x revisi minor (perubahan kecil, tidak merubah konsep). Revisi mayor atau tambahan fitur di luar kesepakatan awal dikenakan biaya tambahan.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-1">
                                        <ClockIcon className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Waktu Pengerjaan</h3>
                                        <p className="text-sm leading-relaxed text-gray-400">
                                            Deadline disepakati bersama di awal. Keterlambatan pengiriman materi/feedback dari klien dapat mempengaruhi jadwal penyelesaian.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Privacy Policy Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheckIcon className="size-6 text-blue-400" />
                            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                        </div>

                        <div className="h-full p-8 rounded-3xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                            <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                                Saya berkomitmen melindungi privasi Anda. Semua informasi yang dibagikan selama proyek berlangsung bersifat rahasia.
                            </p>

                            <ul className="space-y-4 relative z-10">
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <LockIcon className="size-4 text-blue-400" />
                                    <span>Data project tidak akan disebarluaskan.</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <LockIcon className="size-4 text-blue-400" />
                                    <span>Alamat email hanya untuk komunikasi project.</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <LockIcon className="size-4 text-blue-400" />
                                    <span>Tidak ada penjualan data ke pihak ketiga.</span>
                                </li>
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/5">
                                <p className="text-xs text-center text-gray-500">
                                    Last updated: February 2026<br />
                                    &copy; Portfolio Nael
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </main>
        </section>
    );
}
