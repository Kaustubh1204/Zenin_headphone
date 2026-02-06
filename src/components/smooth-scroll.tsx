"use client";

import { ReactNode } from "react";
import ReactLenis from "lenis/react";

export function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true, wheelMultiplier: 0.9 }}>
            {children}
        </ReactLenis>
    );
}
