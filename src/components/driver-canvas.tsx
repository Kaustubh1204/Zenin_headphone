"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { cn } from "@/lib/utils";

export const DriverCanvas = ({ className, containerRef }: { className?: string, containerRef?: RefObject<HTMLElement | null> }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef || undefined,
        offset: ["start start", "end end"]
    });

    const frameCount = 240;

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, "0");
            img.src = `/technology/driver/ezgif-frame-${frameIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Render logic
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Use parent container dimensions
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // --- STRICT LAYOUT CONSTRAINTS (UPDATED) ---
        // 1. Occupy no more than 40% of viewport width
        // 2. Right-aligned

        // Calculate scale to fit within 40% of width, acting as a technical diagram
        // We use a fixed scale factor relative to the CANVAS height/width to prevent resizing during scroll
        const targetWidth = canvas.width * 0.40;
        const scale = Math.min(
            targetWidth / img.width,
            (canvas.height * 0.9) / img.height
        );

        // Position: Centered within the right 40% column
        // Viewport split: | 60% TEXT | 40% DRIVER |
        const driverAreaStartX = canvas.width * 0.60;
        const driverAreaWidth = canvas.width * 0.40;

        const x = driverAreaStartX + (driverAreaWidth - (img.width * scale)) / 2;
        const y = (canvas.height - (img.height * scale)) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // --- PURE LINEAR SCROLL MAPPING ---
        // 0% Scroll = 0% Open (Frame 0)
        // 100% Scroll = 100% Open (Max Frame)

        const maxFrame = frameCount - 1;
        const frameIndex = Math.min(maxFrame, Math.floor(latest * maxFrame));

        requestAnimationFrame(() => render(frameIndex));
    });

    useEffect(() => {
        if (isLoaded && images.length > 0) {
            render(0);
        }
    }, [isLoaded, images]);

    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && images.length > 0) {
                const latest = scrollYProgress.get();
                const maxFrame = frameCount - 1;
                const frameIndex = Math.min(maxFrame, Math.floor(latest * maxFrame));
                render(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, scrollYProgress]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("block w-full h-full", className)}
        />
    );
};
