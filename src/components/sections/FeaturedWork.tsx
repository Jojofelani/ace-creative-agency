'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Lumina Fashion',
        category: 'Branding',
        image: 'bg-stone-200', // Placeholder
        size: 'large', // spanning 2 cols
    },
    {
        id: 2,
        title: 'Urban Architect',
        category: 'Web Design',
        image: 'bg-zinc-300', // Placeholder
        size: 'small',
    },
    {
        id: 3,
        title: 'Neon Energy',
        category: 'Strategy',
        image: 'bg-neutral-300', // Placeholder
        size: 'small',
    },
    {
        id: 4,
        title: 'Velvet Cafe',
        category: 'Social Media',
        image: 'bg-stone-300', // Placeholder
        size: 'large',
    },
];

export function FeaturedWork() {
    return (
        <section className="bg-off-white py-24" id="work">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-between items-end mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
                        Featured <br /> Work
                    </h2>
                    <Link href="/work" className="hidden md:flex items-center text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors">
                        View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative overflow-hidden ${project.size === 'large' ? 'md:col-span-2' : ''}`}
                        >
                            <div className={`aspect-[4/3] ${project.size === 'large' ? 'md:aspect-[2/1]' : ''} ${project.image} w-full rounded-sm overflow-hidden`}>
                                <div className="w-full h-full bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
                            </div>

                            <div className="mt-4 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-charcoal group-hover:text-gold transition-colors">{project.title}</h3>
                                    <p className="text-sm text-charcoal/60">{project.category}</p>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                    <ArrowUpRight className="text-gold" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/work" className="flex items-center text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors w-fit">
                        View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
