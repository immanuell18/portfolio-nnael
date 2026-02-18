import { motion } from "framer-motion";
import { ArrowLeftIcon, ShieldCheckIcon, FileTextIcon } from "lucide-react";
import { Link } from 'react-router-dom';

export default function Legal() {
    return (
        <section className="min-h-screen bg-black text-gray-300 px-4 py-20 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 size-96 bg-purple-900/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 size-96 bg-blue-900/20 rounded-full blur-[150px]" />
            </div>

            <Link to="/" className="fixed top-8 left-8 btn glass flex items-center gap-2 z-50 text-white">
                <ArrowLeftIcon className="size-4" /> Back to Home
            </Link>

            <div className="max-w-3xl mx-auto space-y-16 relative z-10">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Legal & Terms</h1>
                    <p className="text-lg text-gray-400">Transparansi dan aturan kerja sama.</p>
                </div>

                {/* Terms of Service */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass p-8 rounded-2xl border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <FileTextIcon className="size-6 text-purple-400" />
                        <h2 className="text-2xl font-bold text-white">Terms of Service (Aturan Main)</h2>
                    </div>
                    <ul className="space-y-4 list-disc pl-5">
                        <li>
                            <strong className="text-white">Pembayaran:</strong> DP (Down Payment) minimal 50% di awal sebelum pengerjaan dimulai. Pelunasan dilakukan setelah project selesai dan sebelum serah terima file final/source code.
                        </li>
                        <li>
                            <strong className="text-white">Revisi:</strong> Klien berhak mendapatkan maksimal 2x revisi minor (perubahan kecil). Revisi mayor (ubah konsep total) akan dikenakan biaya tambahan.
                        </li>
                        <li>
                            <strong className="text-white">Waktu Pengerjaan:</strong> Estimasi waktu akan disepakati di awal. Keterlambatan materi dari klien dapat mempengaruhi deadline.
                        </li>
                        <li>
                            <strong className="text-white">Pembatalan:</strong> Jika ada pembatalan sepihak dari klien saat pengerjaan sudah berjalan, DP tidak dapat dikembalikan.
                        </li>
                    </ul>
                </motion.div>

                {/* Privacy Policy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-8 rounded-2xl border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldCheckIcon className="size-6 text-green-400" />
                        <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
                    </div>
                    <p className="mb-4">
                        Saya menghargai privasi data Anda. Informasi yang Anda berikan melalui formulir kontak (Nama, Email, Detail Project) hanya digunakan untuk keperluan komunikasi dan pengerjaan proyek.
                    </p>
                    <p>
                        Saya tidak akan membagikan, menjual, atau menyalahgunakan informasi kontak Anda kepada pihak ketiga manapun tanpa izin.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
