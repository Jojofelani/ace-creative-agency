'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Circle, Globe, Share2 } from 'lucide-react';

const services = [
    {
        id: 'branding',
        title: 'Branding & Identity',
        description: 'We craft distinct visual identities that tell compeling stories and resonate with your audience.',
        icon: Circle,
    },
    {
        id: 'web',
        title: 'Web Design & Dev',
        description: 'Immersive, high-performance websites built on modern tech stacks like Next.js.',
        icon: Globe,
    },
    {
        id: 'social',
        title: 'Social Media',
        description: 'Strategic content and management to grow your community and engage customers.',
        icon: Share2,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function Services() {
    return (
        <section className="bg-charcoal py-24 text-off-white" id="services">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold font-sans text-sm tracking-widest uppercase mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-4xl font-heading font-bold"
                    >
                        We build brands that define culture.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={item}
                            className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-gold/30 hover:bg-white/10 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                <service.icon className="text-gold w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                {service.description}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-gold hover:text-white">
                                Learn More
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
