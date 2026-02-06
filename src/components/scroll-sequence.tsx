"use client";

import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type RefObject } from "react";
import { cn } from "@/lib/utils";

interface ScrollSequenceProps {
    className?: string;
    containerRef: RefObject<HTMLElement | null>;
    basePath: string; // e.g. "/specs/cushion/ezgif-frame-"
    frameCount: number;
    extension?: string; // default .jpg
}

export const ScrollSequence = ({
    className,
    containerRef,
    basePath,
    frameCount,
    extension = ".jpg"
}: ScrollSequenceProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // We bind the scroll progress specifically to the container passed in
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // "Motion limits / Mechanical Lag"
    // Apply interpolated motion: low-pass filter (damping)
    // "Motion should feel weighted, not reactive" -> stiffness: 50, damping: 20
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
        mass: 1,
        restDelta: 0.001
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, "0");
            img.src = `${basePath}${frameIndex}${extension}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [basePath, frameCount, extension]);

    // Render logic
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Set dimensions to match client size (high DPI handling would need window.devicePixelRatio, 
        // but keeping it simple/performant for now as per previous constraints)
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // Calculate "cover" fit
        // The user wants "Visual fills entire viewport" or "remains centered"
        // We will implement essentially object-fit: contain (or cover depending on asset aspect ratio vs viewport)
        // Actually, for "Visual fills entire viewport", "cover" is usually best, but let's check
        // "Cushion video/image remains centered" - usually implies contain or cover without cropping essential parts.
        // Given "Preserve original asset resolution" and "Do NOT upscale", we should be careful.
        // However, filling viewport usually requires scaling.
        // Re-reading: "Use GPU-friendly transforms only" -> implies maybe we should scale canvas CSS?
        // But drawing to canvas usually involves scaling in context.
        // Let's us drawImage with 'contain' logic but maximizing size, or 'cover' if intended.
        // "Visual fills entire viewport" -> COVER.

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio); // Cover
        // const ratio = Math.min(hRatio, vRatio); // Contain

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    };

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // "animation progress = scroll progress * 0.65"
        const adjustedProgress = latest * 0.65;
        const maxFrame = frameCount - 1;
        const frameIndex = Math.min(maxFrame, Math.floor(adjustedProgress * maxFrame));

        requestAnimationFrame(() => render(frameIndex));
    });

    // Initial render
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            render(0);
        }
    }, [isLoaded, images]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded && images.length > 0) {
                const latest = smoothProgress.get();
                const adjustedProgress = latest * 0.65;
                const maxFrame = frameCount - 1;
                const frameIndex = Math.min(maxFrame, Math.floor(adjustedProgress * maxFrame));
                render(frameIndex);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, images, smoothProgress, frameCount]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("block w-full h-full object-cover", className)}
        />
    );
};
