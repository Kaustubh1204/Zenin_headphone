import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/10 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-lg font-medium tracking-tight text-white/90">
                        Sony
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="text-lg font-medium tracking-tight text-white">
                        WH-1000XM6
                    </span>
                </div>

                <nav className="flex flex-wrap justify-center gap-8 text-sm font-medium text-white/60">
                    <Link href="#" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#" className="hover:text-white transition-colors">Solution</Link>
                    <Link href="#" className="hover:text-white transition-colors">Customers</Link>
                    <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-white transition-colors">Help</Link>
                    <Link href="#" className="hover:text-white transition-colors">About</Link>
                </nav>

                <div className="text-xs text-white/40">
                    © {new Date().getFullYear()} Sony Group Corporation.
                </div>
            </div>
        </footer>
    );
}
