"use client";

import { ScrollyCanvas } from "@/components/scrolly-canvas";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <div className="relative w-full bg-background selection:bg-zenin-blue/30">

            {/* The Stickiness Wrapper */}
            {/* We need a tall container to scroll through. */}
            {/* 400vh gives us plenty of room for steps. */}
            <div className="relative h-[500vh]">

                {/* Background Canvas (Fixed/Sticky) */}
                <div className="sticky top-16 h-[calc(100vh-4rem)] w-full overflow-hidden">
                    <ScrollyCanvas />
                </div>

                {/* Scroll Content Overlays */}
                {/* positioned absolutely over the tall container, mapped to scroll % */}

                {/* SECTION 1: HERO (0-15%) -> Roughly 0-75vh usually, but here we absolute position based on % logic or use a grid */}
                {/* We will use a container that sits ON TOP of the sticky canvas, 
            but since the canvas is sticky, we need the text sections to also be part of the flow 
            or fixed at specific trigger points. 
            Better approach: The text container is the scrollable element. 
        */}

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center">

                    {/* Intro Text */}
                    <Section start="5%" end="15%" className="justify-center text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-8xl"
                        >
                            Zenin <span className="text-white/40">WH-1000XM6</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mt-4 text-lg text-white/60 sm:text-xl md:text-2xl"
                        >
                            Silence, perfected.
                        </motion.p>
                    </Section>

                    {/* Engineering Reveal */}
                    <Section start="25%" end="40%" className="items-start justify-center px-6 sm:px-12 md:pl-24">
                        <div className="max-w-xl text-left">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                                Precision-engineered
                                <br />
                                <span className="text-white/40">for silence.</span>
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-white/60">
                                Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
                                Every component is tuned for balance, power, and comfort—hour after hour.
                            </p>
                        </div>
                    </Section>

                    {/* Noise Cancelling */}
                    <Section start="50%" end="65%" className="items-end justify-center px-6 sm:px-12 md:pr-24">
                        <div className="max-w-xl text-right">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                                Adaptive noise
                                <br />
                                <span className="text-zenin-blue">cancelled.</span>
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-white/60">
                                Multi-microphone array listens in every direction.
                                Real-time noise analysis adjusts to your environment.
                                Plan, trains, and crowds fade away.
                            </p>
                        </div>
                    </Section>

                    {/* Sound & Upscaling */}
                    <Section start="75%" end="85%" className="justify-center text-center px-6">
                        <div className="max-w-2xl text-center">
                            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl text-glow-blue">
                                Immersive, lifelike sound.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-white/60">
                                High-performance drivers unlock detail, depth, and texture in every track.
                                AI-enhanced upscaling restores clarity to compressed audio.
                            </p>
                        </div>
                    </Section>

                    {/* Reassembly & CTA */}
                    <Section start="90%" end="98%" className="justify-center text-center px-6">
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
                                Hear everything.
                            </h2>
                            <p className="mt-4 text-xl text-white/60">
                                Designed for focus, crafted for comfort.
                            </p>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 pointer-events-auto items-center">
                                <Link href="/technology">
                                    <button className="w-full sm:w-auto rounded-full bg-white px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-black transition-transform hover:scale-105">
                                        Experience XM6
                                    </button>
                                </Link>
                                <Link href="/specs">
                                    <button className="text-base sm:text-lg font-medium text-white/60 hover:text-white py-2">
                                        See specs
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </Section>

                </div>
            </div>



        </div>
    );
}

function Section({ children, className, start, end }: { children: React.ReactNode, className?: string, start: string, end: string }) {
    // We can't easily use 'start'/'end' strings for exact sticky positioning without absolute calculation relative to the 500vh container.
    // A simpler way for this demo is 'top-[percentage]'

    return (
        <div
            className={`absolute flex w-full flex-col ${className}`}
            style={{ top: start, height: 'auto' }} // This is a rough approximation.
        >
            {children}
        </div>
    );
}
