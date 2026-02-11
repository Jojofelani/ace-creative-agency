import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const footerLinks = {
    services: [
        { name: 'Branding & Identity', href: '/services#branding' },
        { name: 'Web Design', href: '/services#web' },
        { name: 'Social Media Management', href: '/services#social' },
        { name: 'Motion & Digital', href: '/services#motion' },
        { name: 'Creative Strategy', href: '/services#strategy' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ],
};

export function Footer() {
    return (
        <footer className="bg-charcoal text-off-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-heading font-bold tracking-tighter block">
                            ACE <span className="text-gold">AGENCY</span>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Powered by 360 Graphics. A bold, strategy-driven creative studio for global brands and startups.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="text-white/60 hover:text-gold transition-colors">
                                <Twitter size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-gold font-heading font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-gold font-heading font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-6">
                        <h4 className="text-gold font-heading font-semibold">Contact</h4>
                        <div className="space-y-3 text-sm text-white/60">
                            <a href="mailto:hello@aceagency.com" className="flex items-center hover:text-white transition-colors">
                                <Mail size={16} className="mr-2" /> hello@aceagency.com
                            </a>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-2" /> New York, NY
                            </div>
                        </div>
                        <Button className="w-full bg-gold text-charcoal hover:bg-gold-muted mt-4">
                            Start a Project <ArrowUpRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                    <p>© 2026 Ace Creative Agency powered by 360 Graphics</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
