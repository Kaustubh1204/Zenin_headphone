"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollyCanvas = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    const frameCount = 240; // Total frames based on public/hc content

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            // Format: ezgif-frame-001.jpg
            const frameIndex = i.toString().padStart(3, "0");
            img.src = `/hc/ezgif-frame-${frameIndex}.jpg`;
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

        // Responsive scaling (object-fit: cover)
        // Set canvas resolution to match display size for 1:1 pixel mapping
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const rect = canvas.getBoundingClientRect();
        const isMobile = rect.width < 768;
        const scale = Math.max(
            rect.width / img.width,
            rect.height / img.height
        ) * (isMobile ? 0.6 : 0.85);

        const x = isMobile
            ? (rect.width - img.width * scale) / 2
            : (rect.width * 0.75) - (img.width * scale / 2);

        const y = ((rect.height - img.height * scale) / 2) + (rect.height * (isMobile ? 0 : 0.1));

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map scroll 0-1 to frame index
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        requestAnimationFrame(() => render(frameIndex));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            render(0);
        }
    }, [isLoaded, images]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && images.length > 0) {
                // We need to know the current frame to re-render it correctly on resize
                // Since we don't store current frame in state to avoid re-renders, 
                // we can re-calculate from scroll or just let the next scroll event handle it.
                // For better UX, we could refetch scrollYProgress.
                const latest = scrollYProgress.get();
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(latest * frameCount)
                );
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
