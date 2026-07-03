'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
    // Start visible on the first client render; the effect decides whether to
    // keep the intro (first visit) or dismiss it immediately.
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Skip the intro for returning visitors and users who prefer reduced motion.
        const skip =
            !!sessionStorage.getItem('ace-intro-seen') ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // All state updates happen inside the timer callback (never synchronously
        // in the effect body). A 0ms delay dismisses the intro right away for skippers.
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('ace-intro-seen', 'true');
        }, skip ? 0 : 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-off-white"
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-center tracking-tighter"
                        >
                            MOVING <span className="text-gold">BRANDS</span> FORWARD
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
