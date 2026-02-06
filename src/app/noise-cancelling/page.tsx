"use client";

import { motion } from "framer-motion";

export default function NoiseCancellingPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-white/20 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
                <div className="text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Silence, Engineered
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        className="text-white/60 text-lg md:text-xl font-medium tracking-wide max-w-xl mx-auto"
                    >
                        Adaptive sensing that listens before it cancels.
                    </motion.p>
                </div>
                {/* Subtle Ambient Glow */}
                <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 to-transparent opacity-50 pointer-events-none" />
            </section>

            {/* 2. MICROPHONE SENSING SECTION (Image Left, Text Right) */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                {/* Image (Left) */}
                <div className="w-full md:w-[50%] relative aspect-square md:aspect-[4/3]">
                    <motion.img
                        src="/noise-cancelling/sensing.png"
                        alt="Microphone Sensing Array"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Text (Right) */}
                <div className="w-full md:w-[40%] flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                            Environment Sensing
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Eight distinct microphones capture external noise and internal ear canal acoustics simultaneously. The system listens to your environment with precision before generating an inverse signal.
                        </p>
                    </motion.div>
                </div>

            </section>

            {/* 3. ELECTRONICS & PROCESSING SECTION (Image Right, Text Left) */}
            <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                {/* Text (Left) */}
                <div className="w-full md:w-[40%] flex flex-col space-y-8 order-2 md:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                            Real-Time Processing
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Powered by the Integrated Processor V2. Adaptive algorithms analyze sound waves millisecond by millisecond, adjusting suppression levels instantly to match changing environments.
                        </p>
                    </motion.div>
                </div>

                {/* Image (Right) */}
                <div className="w-full md:w-[50%] relative aspect-square md:aspect-[4/3] order-1 md:order-2">
                    <motion.img
                        src="/noise-cancelling/processor.png"
                        alt="Integrated V2 Processor"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full h-full object-contain"
                    />
                </div>

            </section>

            {/* Footer / Exit */}
            <section className="py-24 flex items-center justify-center border-t border-white/5 bg-[#050505]">
                <p className="text-white/20 tracking-widest text-xs uppercase">Intelligent Silence</p>
            </section>

        </div>
    );
}
