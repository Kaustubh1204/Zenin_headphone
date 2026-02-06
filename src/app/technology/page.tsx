"use client";

import { DriverVideo } from "@/components/driver-video";
import { motion } from "framer-motion";

export default function TechnologyPage() {
    return (
        <div className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-white/20 overflow-x-hidden">

            {/* 
                PAGE PURPOSE: 
                Display driver system (Hero Video) + Static Tech Sections.
            */}

            {/* 1. HERO: Full-Screen Video Background */}
            <section className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <DriverVideo />
                    {/* Visual Readability Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />
                </div>

                <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                    <div className="w-full md:w-[50%] lg:w-[45%] flex flex-col space-y-8 pl-4 md:pl-8 border-l-2 border-white/10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-white/60 text-sm tracking-[0.2em] uppercase font-semibold mb-4">
                                Core Audio Engine
                            </h2>
                            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none drop-shadow-2xl">
                                Driver System
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
                                The 30mm precision-engineered dynamic driver unit features a soft edge diaphragm, enhancing noise canceling in low frequency ranges.
                            </p>
                            <p className="text-white/70 text-base leading-relaxed max-w-md drop-shadow-sm">
                                A high-rigidity carbon fiber composite dome delivers natural sound quality. Magnet and voice coil alignment are optimized for deep bass and distortion-free clarity.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs uppercase tracking-wider text-white/80">30mm Dynamic</span>
                            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs uppercase tracking-wider text-white/80">Carbon Fiber</span>
                            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs uppercase tracking-wider text-white/80">Neodymium</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. STATIC TECH SECTIONS */}
            <div className="relative w-full z-10 bg-[#050505] space-y-24 py-24">

                {/* Acoustic Chamber - Split Layout: Text Left | Image Right */}
                <section className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">

                    {/* Text Side (Left) */}
                    <div className="w-full md:w-[40%] flex flex-col justify-center space-y-6 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-white/50 text-xs tracking-widest uppercase font-semibold mb-2 block">Precise Engineering</span>
                            <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                                Acoustic Chamber
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-white/60 text-base md:text-lg leading-relaxed">
                                Optimized cavity geometry minimizes resonance. Layered damping and airflow management provide clarity, balance, and rich tonal response.
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Side (Right) */}
                    <div className="w-full md:w-[55%] lg:w-[60%] relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl order-1 md:order-2">
                        <img
                            src="/technology/acoustic-chamber.jpg"
                            alt="Acoustic Chamber"
                            className="w-full h-full object-cover opacity-100 hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle vignette for blending if needed, or pure clean image */}
                        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    </div>

                </section>

                {/* Power System - Full-Screen Overlay Section */}
                <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">

                    {/* Background Image - Absolute Cover */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/technology/power-system.jpg"
                            alt="Power System"
                            className="w-full h-full object-cover"
                        />
                        {/* Heavy Vignette for Text Legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content Overlay - Centered/Bottom */}
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center space-y-6 md:space-y-8 mt-[20vh] md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-white/60 text-sm tracking-[0.2em] uppercase font-semibold mb-4 block">
                                Endurance & Efficiency
                            </span>
                            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none drop-shadow-2xl">
                                Power System
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-white/80 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl drop-shadow-lg">
                                High-capacity lithium battery with precise intelligent power management.
                            </p>
                            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mt-4 drop-shadow-md">
                                Dedicated internal routing ensures consistent voltage delivery and rapid charging performance for all-day listening.
                            </p>
                        </motion.div>
                    </div>

                </section>

            </div>

            {/* Footer / Exit */}
            <section className="py-12 flex items-center justify-center border-t border-white/5 bg-[#050505]">
                <p className="text-white/20 tracking-widest text-xs uppercase">Specification Complete</p>
            </section>
        </div>
    );
}
