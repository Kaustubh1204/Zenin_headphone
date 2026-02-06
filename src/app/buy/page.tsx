"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, Package, ShieldCheck, Truck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuyPage() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-white selection:bg-[#0050FF]/30 font-sans">
            <SplitHero />
            <DecisionSupport />
        </main>
    );
}

function SplitHero() {
    const [selectedColor, setSelectedColor] = useState<"black" | "silver">("black");

    return (
        <section className="relative flex flex-col lg:h-screen lg:flex-row">
            {/* LEFT: Product Visual (Static, Cinematic) */}
            <div className="relative h-[50vh] w-full bg-[#050505] lg:h-full lg:w-1/2 flex items-center justify-center overflow-hidden p-6">
                {/* Subtle Radial Glow behind product */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] pointer-events-none" />

                <div className="relative w-full max-w-[500px] aspect-square">
                    {/* Replace with actual high-res render. Using a technology asset or frame 001 as placeholder */}
                    <Image
                        src={selectedColor === "black" ? "/hc/ezgif-frame-001.jpg" : "/hc/ezgif-frame-001.jpg"}
                        alt="Sony WH-1000XM6"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>

            {/* RIGHT: Purchase Column */}
            <div className="flex h-auto w-full flex-col justify-center bg-[#0A0A0C] px-6 py-12 lg:h-full lg:w-1/2 lg:px-24">
                <div className="max-w-md mx-auto w-full space-y-8">

                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                            Sony WH-1000XM6
                        </h1>
                        <p className="text-lg text-white/60 font-medium">
                            Industry-leading noise cancellation. Refined.
                        </p>
                    </div>

                    {/* Price */}
                    <div className="space-y-1">
                        <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-semibold tracking-tight">₹29,990</span>
                        </div>
                        <p className="text-xs text-white/40 uppercase tracking-wide">
                            Inclusive of all taxes
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="space-y-6 pt-4 border-t border-white/5">

                        {/* Color Selection */}
                        <div className="space-y-3">
                            <span className="text-sm font-medium text-white/80">Select Finish</span>
                            <div className="flex gap-4">
                                <ColorSwatch
                                    color="#1a1a1a"
                                    label="Matte Black"
                                    isSelected={selectedColor === "black"}
                                    onClick={() => setSelectedColor("black")}
                                />
                                <ColorSwatch
                                    color="#e0e0e0"
                                    label="Platinum Silver"
                                    isSelected={selectedColor === "silver"}
                                    onClick={() => setSelectedColor("silver")}
                                />
                            </div>
                            <p className="text-sm text-white/40">
                                {selectedColor === "black" ? "Matte Black" : "Platinum Silver"}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="space-y-3 pt-4">
                            <button className="w-full rounded-full bg-gradient-to-r from-[#0E0E10] to-[#1A1A1E] p-[1px] group transition-transform active:scale-[0.99]">
                                <div className="relative h-full w-full rounded-full bg-[#050505] border border-white/10 px-8 py-4 flex items-center justify-center gap-2 group-hover:border-[#0050FF]/50 transition-colors">
                                    <span className="text-lg font-medium text-white group-hover:text-[#0050FF] transition-colors">
                                        Buy WH-1000XM6
                                    </span>
                                </div>
                            </button>
                            <div className="text-center">
                                <button className="text-sm text-[#0050FF] hover:text-[#00D6FF] transition-colors font-medium">
                                    Check delivery & offers
                                </button>
                            </div>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-white/40">
                            <div className="flex items-center gap-1.5">
                                <Truck className="w-3.5 h-3.5" />
                                <span>Free delivery</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span>1-year Sony warranty</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Package className="w-3.5 h-3.5" />
                                <span>Easy returns</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function ColorSwatch({ color, label, isSelected, onClick }: { color: string, label: string, isSelected: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={`relative h-10 w-10 rounded-full border-2 transition-all duration-200 ${isSelected ? "border-[#0050FF]" : "border-transparent hover:border-white/20"}`}
            aria-label={label}
        >
            <span
                className="absolute inset-1 rounded-full"
                style={{ backgroundColor: color }}
            />
        </button>
    );
}

function DecisionSupport() {
    return (
        <div className="bg-[#050505] pb-24">
            {/* SECTION 1: WHY */}
            <section className="mx-auto max-w-7xl px-6 py-24 md:px-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <FeatureCard
                        title="Noise Cancellation"
                        text="Sony’s most advanced adaptive noise cancelling yet. Silences the world around you."
                    />
                    <FeatureCard
                        title="Sound Quality"
                        text="Studio-grade tuning with immersive clarity. Hear every detail as the artist intended."
                    />
                    <FeatureCard
                        title="Comfort"
                        text="All-day wear with pressure-relieving cushions and lightweight structural design."
                    />
                </div>
            </section>

            {/* SECTION 2: QUICK SPECS */}
            <section className="mx-auto max-w-4xl px-6 pb-24 md:px-12">
                <h2 className="mb-12 text-2xl font-medium text-white">Technical Highlights</h2>
                <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
                    <SpecRow label="Battery Life" value="30 hours (NC On)" />
                    <SpecRow label="Charging time" value="3 min charge = 3 hours play" />
                    <SpecRow label="Weight" value="Approx. 250g" />
                    <SpecRow label="Connectivity" value="Bluetooth 5.3" />
                    <SpecRow label="Codec Support" value="LDAC, AAC, SBC" />
                    <SpecRow label="Processor" value="Integrated V2" />
                </div>
                <div className="mt-12 text-center md:text-left">
                    <Link href="/specs" className="text-sm font-medium text-white/60 hover:text-white transition-colors">
                        View full specifications →
                    </Link>
                </div>
            </section>

            {/* SECTION 3: DELIVERY & SUPPORT */}
            <section className="mx-auto max-w-3xl px-6 md:px-12">
                <div className="border-t border-white/10">
                    <AccordionItem title="Delivery Timelines">
                        <p className="text-white/60">Standard delivery: 2-4 business days.</p>
                        <p className="text-white/60">Express delivery available at checkout for select pin codes.</p>
                    </AccordionItem>
                    <AccordionItem title="Warranty Information">
                        <p className="text-white/60">Includes 1-year manufacturer warranty covering functional defects.</p>
                        <p className="text-white/60">Extendable warranty plans available for purchase.</p>
                    </AccordionItem>
                    <AccordionItem title="What’s in the Box">
                        <ul className="list-disc pl-5 space-y-1 text-white/60 text-sm">
                            <li>WH-1000XM6 Headphones</li>
                            <li>Carrying Case</li>
                            <li>Connection Cable (HEADPHONE cable)</li>
                            <li>USB Cable</li>
                        </ul>
                    </AccordionItem>
                </div>
            </section>

            {/* Sticky Mobile CTA (Visible only on small screens) */}
            <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0A0A0C]/90 p-4 backdrop-blur-md md:hidden">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-white">WH-1000XM6</p>
                        <p className="text-xs text-white/60">₹29,990</p>
                    </div>
                    <button className="rounded-full bg-[#0050FF] px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-900/20 active:scale-95">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, text }: { title: string, text: string }) {
    return (
        <div className="group rounded-2xl border border-white/5 bg-[#0A0A0C] p-8 transition-colors hover:border-white/10">
            <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-[#0050FF] transition-colors">{title}</h3>
            <p className="text-sm leading-relaxed text-white/50">{text}</p>
        </div>
    );
}

function SpecRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex justify-between border-b border-white/5 pb-3">
            <span className="text-white/40 text-sm">{label}</span>
            <span className="text-white/80 text-sm font-medium">{value}</span>
        </div>
    );
}

function AccordionItem({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-6 text-left"
            >
                <span className="text-base font-medium text-white">{title}</span>
                {isOpen ? <ChevronUp className="h-4 w-4 text-white/40" /> : <ChevronDown className="h-4 w-4 text-white/40" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-sm text-white/60 space-y-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
