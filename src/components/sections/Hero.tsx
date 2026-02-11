'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { InteractiveBackground } from '@/components/ui/InteractiveBackground';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-off-white pt-20">
            {/* Interactive Background */}
            <InteractiveBackground />

            {/* Abstract Animated Shape (CSS/Framer Motion) */}
            <div className="absolute right-0 top-1/4 w-[600px] h-[600px] opacity-20 pointer-events-none z-10">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-full h-full rounded-full bg-gradient-to-tr from-gold to-blush blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tighter">
                        MOVING <br className="hidden md:block" />
                        BRANDS <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-blush">FORWARD</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-sans leading-relaxed"
                    >
                        We are Ace. A strategy-driven creative studio building bold digital experiences for global brands and ambitious startups.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
                    >
                        <Button size="lg" className="text-base group">
                            View Our Work <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="text-base border-white/20 text-white hover:bg-white/10 hover:text-white">
                            Start a Project
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
            >
                <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
