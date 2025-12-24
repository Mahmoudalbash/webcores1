"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
    children?: React.ReactNode;
    bgImage?: string;
    overlayOpacity?: number;
    className?: string;
}

const ParallaxBackground = ({
    children,
    bgImage,
    overlayOpacity = 0.7,
    className = "",
}: ParallaxBackgroundProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {bgImage && (
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 w-full h-[120%] -z-10"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div
                        className="absolute inset-0 bg-background"
                        style={{ opacity: overlayOpacity }}
                    />
                </motion.div>
            )}

            {/* Fallback or additional background elements if no image */}
            {!bgImage && (
                <div className="absolute inset-0 bg-background -z-10" />
            )}

            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default ParallaxBackground;
