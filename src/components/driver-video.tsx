"use client";

import { cn } from "@/lib/utils";

interface DriverVideoProps {
    className?: string;
}

export const DriverVideo = ({ className }: DriverVideoProps) => {
    return (
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <video
                className="w-full h-full object-cover"
                src="/technology/driver.mp4"
                autoPlay
                loop
                muted
                playsInline
            // Ensure it acts as a background element
            />
            {/* 
                Video Behavior Rules:
                - Autoplay looped infinitely
                - Muted by default
                - No controls visible
                - Covers entire container (object-cover)
            */}
        </div>
    );
};
