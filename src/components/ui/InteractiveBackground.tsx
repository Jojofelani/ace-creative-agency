'use client';

import { useEffect } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';

export function InteractiveBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX - 250); // Center the 500px blob
            mouseY.set(e.clientY - 250);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
