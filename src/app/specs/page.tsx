"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollSequence } from "@/components/scroll-sequence";

export default function SpecsPage() {
    return (
        <div className="relative w-full bg-[#050505] text-white selection:bg-white/20">
            <CushionSection />
            <HingeSection />

            {/* Footer / Exit
            <section className="py-24 flex items-center justify-center border-t border-white/5 bg-[#050505]">
                <p className="text-white/20 tracking-widest text-xs uppercase text-center pl-[2px]">
                    Engineering Validated <br />
                    <span className="opacity-50 text-[10px]">Production Ready</span>
                </p>
            </section> */}
        </div>
    );
}

function CushionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Text Opacity Mappings
    // "Text fades in between 15% -> 40%"
    const textOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full h-[200vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* Visual */}
                <ScrollSequence
                    containerRef={containerRef}
                    basePath="/specs/cushion/ezgif-frame-"
                    frameCount={240}
                    className="absolute inset-0 z-0"
                />

                {/* Text Overlay - Left/Top on Mobile */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 top-0 sm:inset-y-0 sm:left-0 w-full sm:w-1/3 p-6 sm:p-12 flex flex-col justify-start sm:justify-center space-y-8 sm:space-y-32 z-10 pointer-events-none mt-16 sm:mt-0"
                >
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Comfort</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Pressure-relieving urethane foam distributes weight for long-listening sessions.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Material Quality</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Synthetic soft-fit leather provides a luxurious feel and high durability.
                        </p>
                    </div>
                </motion.div>

                {/* Text Overlay - Right/Bottom on Mobile */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 w-full sm:w-1/3 p-6 sm:p-12 flex flex-col justify-end sm:justify-center items-center sm:items-end text-center sm:text-right space-y-8 sm:space-y-32 z-10 pointer-events-none mb-16 sm:mb-0"
                >
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Pressure Distribution</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Increased contact area reduces pressure on the ear for a stable, comfortable fit.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Long-wear Ergonomics</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Thermal regulation and breathability designed for all-day use.
                        </p>
                    </div>
                </motion.div>

                {/* Readability Gradients */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 top-0 h-1/3 sm:inset-y-0 sm:left-0 sm:w-1/2 bg-gradient-to-b sm:bg-gradient-to-r from-black/80 to-transparent pointer-events-none"
                />
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 bottom-0 h-1/3 sm:inset-y-0 sm:right-0 sm:w-1/2 bg-gradient-to-t sm:bg-gradient-to-l from-black/80 to-transparent pointer-events-none"
                />

            </div>
        </section>
    );
}

function HingeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Text Opacity Mappings
    // "Fade in between 20% -> 45%"
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

    return (
        <section ref={containerRef} className="relative w-full h-[200vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden">

                {/* Visual */}
                <ScrollSequence
                    containerRef={containerRef}
                    basePath="/specs/hinge/ezgif-frame-"
                    frameCount={240}
                    className="absolute inset-0 z-0"
                />

                {/* Text Overlay - Left/Top on Mobile */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 top-0 sm:inset-y-0 sm:left-0 w-full sm:w-1/3 p-6 sm:p-12 flex flex-col justify-start sm:justify-center space-y-8 sm:space-y-32 z-10 pointer-events-none mt-16 sm:mt-0"
                >
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Rotation Limits</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Silent joints swivel inward, transforming the headphones into a compact case-ready form.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Fold Durability</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Tested for thousands of cycles to ensure consistent mechanical resistance.
                        </p>
                    </div>
                </motion.div>

                {/* Text Overlay - Right/Bottom on Mobile */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 bottom-0 sm:inset-y-0 sm:right-0 w-full sm:w-1/3 p-6 sm:p-12 flex flex-col justify-end sm:justify-center items-center sm:items-end text-center sm:text-right space-y-8 sm:space-y-32 z-10 pointer-events-none mb-16 sm:mb-0"
                >
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Materials</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Aerospace-grade composite pivots with self-lubricating washers.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-white text-base sm:text-lg font-semibold tracking-wide">Longevity Testing</h3>
                        <p className="text-white/50 text-xs sm:text-sm leading-relaxed max-w-[250px] sm:max-w-[200px]">
                            Engineered for years of daily folding and unfolding without loosening.
                        </p>
                    </div>
                </motion.div>

                {/* Readability Gradients */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 top-0 h-1/3 sm:inset-y-0 sm:left-0 sm:w-1/2 bg-gradient-to-b sm:bg-gradient-to-r from-black/80 to-transparent pointer-events-none"
                />
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute inset-x-0 bottom-0 h-1/3 sm:inset-y-0 sm:right-0 sm:w-1/2 bg-gradient-to-t sm:bg-gradient-to-l from-black/80 to-transparent pointer-events-none"
                />

            </div>
        </section>
    );
}
