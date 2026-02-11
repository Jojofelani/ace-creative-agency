'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
    return (
        <section className="relative py-32 bg-charcoal overflow-hidden text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gold/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tighter">
                        Let's Build Something <span className="text-gold">Powerful</span>
                    </h2>
                    <p className="text-xl text-white/70 max-w-xl mx-auto leading-relaxed">
                        Ready to elevate your brand? We are currently accepting new projects for Q2 2026.
                    </p>

                    <div className="pt-8">
                        <Button size="lg" className="h-14 px-10 text-lg bg-gold hover:bg-gold-muted text-charcoal font-bold">
                            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
