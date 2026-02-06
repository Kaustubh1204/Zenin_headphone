"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setHidden(false);
            setScrolled(true);
        } else {
            setHidden(false); // keep it visible for now, or true if we want it to hide at very top
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            animate="visible"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 transition-colors duration-300 md:px-12",
                scrolled ? "glass" : "bg-transparent"
            )}
        >
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
                <span className="text-lg font-medium tracking-tight text-white/90">
                    Sony
                </span>
                <span className="text-white/40">|</span>
                <span className="text-lg font-medium tracking-tight text-white">
                    WH-1000XM6
                </span>
            </div>

            {/* Center: Links */}
            <div className="hidden items-center gap-8 md:flex">
                {[
                    { name: "Overview", href: "/" },
                    { name: "Technology", href: "/technology" },
                    { name: "Noise Cancelling", href: "/noise-cancelling" },
                    { name: "Specs", href: "/specs" },
                ].map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors duration-200",
                                isActive ? "text-white" : "text-white/60 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            {/* Right: CTA */}
            <div className="flex items-center gap-4">
        
                <Link href="/buy">
                    <button className="group relative overflow-hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-medium text-white transition-all hover:bg-blue-500">
                        <span className="relative z-10">Buy</span>
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sony-blue to-sony-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </button>
                </Link>
            </div>
        </motion.nav>
    );
}
