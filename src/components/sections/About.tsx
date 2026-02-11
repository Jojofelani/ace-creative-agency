'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Delivered', value: '150+' },
    { label: 'Global Awards', value: '25' },
    { label: 'Team Members', value: '18' },
];

export function About() {
    return (
        <section className="bg-off-white py-24" id="about">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Stats & Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="border-l-2 border-gold pl-6">
                                    <h3 className="text-4xl font-heading font-bold text-charcoal mb-2">{stat.value}</h3>
                                    <p className="text-sm text-charcoal/60 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-[400px] w-full bg-charcoal rounded-sm overflow-hidden hidden lg:block">
                            {/* Abstract visual since we don't have real images yet */}
                            <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black opacity-90" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 border border-gold/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <div className="absolute w-48 h-48 border border-blush/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Brand Story */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold font-sans text-sm tracking-widest uppercase mb-4">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-8 leading-tight">
                            Bridging the gap between <span className="text-gold-muted">strategy</span> and <span className="italic font-serif">art</span>.
                        </h3>
                        <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                            <p>
                                Ace Creative Agency was founded on a simple belief: that brands shouldn't just be seen, they should be felt. Powered by 360 Graphics, we combine decades of technical expertise with a fresh, fashion-forward design adoption.
                            </p>
                            <p>
                                We work with visionaries who refuse to compromise. From global retailers like H&M to disruptive tech startups, our process is the same—uncover the truth, and tell it beautifully.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link href="/about" className="inline-flex items-center text-charcoal font-bold hover:text-gold transition-colors">
                                Read Our Full Story <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
