'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useReducedMotion, motion } from 'framer-motion';

export function InteractiveBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const prefersReducedMotion = useReducedMotion();

    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const el = containerRef.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 250); // Center the 500px blob
            mouseY.set(e.clientY - 250);
        };

        // Only track the cursor while the hero is actually on screen.
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    window.addEventListener('mousemove', handleMouseMove);
                } else {
                    window.removeEventListener('mousemove', handleMouseMove);
                }
            },
            { threshold: 0 }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY, prefersReducedMotion]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-charcoal z-0" />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-gold/30 to-blush/30 blur-[100px] z-0 mix-blend-screen"
                style={{
                    x: springX,
                    y: springY,
                }}
            />
            {/* Static ambient glow for fallback/added depth */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] z-0" />
        </div>
    );
}
