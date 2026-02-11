'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div
                    className={cn(
                        "flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] rounded-full border",
                        isScrolled
                            ? "w-full max-w-3xl bg-charcoal/40 backdrop-blur-2xl saturate-150 border-white/10 py-3 px-6 shadow-2xl"
                            : "w-full max-w-5xl bg-white/5 backdrop-blur-sm border-white/5 py-4 px-8 hover:bg-white/10"
                    )}
                >
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tighter relative z-50 group">
                        <span className="text-white mix-blend-difference">ACE</span> <span className="text-gold">AGENCY</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        <div className={cn(
                            "flex items-center p-1 rounded-full transition-colors duration-300",
                            isScrolled ? "bg-transparent" : "bg-white/5 backdrop-blur-sm border border-white/5"
                        )}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-5 py-2 rounded-full text-sm font-medium text-white/80 hover:text-charcoal hover:bg-gold transition-all duration-300"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <Button
                            variant="default"
                            size="sm"
                            className={cn(
                                "rounded-full transition-all duration-300",
                                isScrolled ? "bg-gold text-charcoal hover:bg-gold-muted" : "bg-white text-charcoal hover:bg-gray-200"
                            )}
                        >
                            Start a Project
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 text-white p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 bg-charcoal z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 hover:to-gold transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="lg" className="mt-8 rounded-full bg-gold text-charcoal hover:bg-gold-muted px-12 h-14 text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                            Start a Project
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
