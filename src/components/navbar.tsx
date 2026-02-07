"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Handle scroll background
    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 20);
    });

    // Handle resize to close mobile menu automatically on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [mobileMenuOpen]);

    const links = [
        { name: "Overview", href: "/" },
        { name: "Technology", href: "/technology" },
        { name: "Noise Cancelling", href: "/noise-cancelling" },
        { name: "Specs", href: "/specs" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 transition-colors duration-300 md:px-12",
                    scrolled || mobileMenuOpen ? "glass bg-black/60 backdrop-blur-md" : "bg-transparent"
                )}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 flex-shrink-0 cursor-pointer transition-opacity hover:opacity-80"
                    aria-label="Zenin Home"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="text-xl font-bold tracking-tight text-white/90">Zenin</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden items-center gap-8 md:flex">
                    {links.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors duration-200",
                                    isActive ? "text-white" : "text-white/60 hover:text-white"
                                )}
                                aria-current={isActive ? "page" : undefined}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Section: CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/buy">
                        <button className="group relative overflow-hidden rounded-full bg-zenin-blue px-6 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
                            <span className="relative z-10">Buy</span>
                        </button>
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden hover:bg-white/20 transition-colors border border-white/5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl md:hidden"
                    >
                        <nav className="flex flex-col items-center gap-8 p-4 text-center">
                            {links.map((item, i) => {
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={cn(
                                                "text-3xl font-bold tracking-tight transition-colors block py-2",
                                                isActive ? "text-zenin-blue" : "text-white/60 hover:text-white"
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
