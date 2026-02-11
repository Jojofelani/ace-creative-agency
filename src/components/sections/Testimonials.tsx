'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
    {
        id: 1,
        quote: "Working with Jay was an absolute pleasure. His keen understanding of design and what it takes to create stunning visuals, paired with his ability to listen and build a brand new website in record time. Highly recommend to any business owner who wants to create an exceptional brand.",
        name: "Charles Lacasse",
        role: "CEO",
        company: "Boombox",
        initials: "CL"
    },
    {
        id: 2,
        quote: "Jay is one-of-a-kind creative mind in the best way possible. He's always coming up with mind-blowing ideas, and I've had the pleasure of working with him on multiple projects. He's a master at what he does, delivers exceptional results and never disappoints. I would highly recommend him for your next project—his personality is sweet and full of creative ideas!",
        name: "Max Trudel",
        role: "CREATIVE DIRECTOR",
        company: "Freelance",
        initials: "MT"
    },
    {
        id: 3,
        quote: "Working with Jay Nadeau was an absolute game-changer for my website (and the amount of compliments I got for it). The results that went far beyond my expectations. His Jay if you like working with someone who brings innovation, dedication, and a smile and consistently elevates your ideas to the next level I couldn't recommend him more!",
        name: "Jeanette Nadeau",
        role: "FOUNDER + EDITOR",
        company: "The Shift",
        initials: "JN"
    },
    {
        id: 4,
        quote: "The result is a chameleon, minus the clichés. While many designers just stuck this 'Trades style' label onto an antiquated or overdone aesthetic, Jay took the time to experience. Over the years working with Boombox, he's proven time and time again that he can deliver fresh concepts, be it minimalist, too bold, from 2D animations to 3D renders and even web design, Jay's range is nothing short of extraordinary.",
        name: "TJ Weber",
        role: "HEAD OF PRODUCTION",
        company: "Boombox",
        initials: "TW"
    },
    {
        id: 5,
        quote: "Jay's the real deal. Not only a France pro, but his day-to-day work ethic is unmatched. I've done miles we didn't even ask for. On Lowback, he turned loose ideas into a completely reimagined what we thought was possible. Creative, proactive, and always bringing smart solutions and clear comms. Funny, honest, and a joy to work with—we'd be lost without him.",
        name: "Lincoln Dave",
        role: "EXPERIENCE & CREATIVE DIRECTOR",
        company: "Lowback",
        initials: "LD"
    },
    {
        id: 6,
        quote: "Collaborating with this team elevated our brand to new heights. Their strategic approach and creative execution were flawless. Every detail was meticulously crafted, resulting in a website that truly represents our vision.",
        name: "Sarah Mitchell",
        role: "MARKETING DIRECTOR",
        company: "Vertex Co",
        initials: "SM"
    },
    {
        id: 7,
        quote: "An exceptional experience from start to finish. The team's ability to translate our ideas into a stunning digital presence was remarkable. Professional, responsive, and incredibly talented.",
        name: "David Chen",
        role: "FOUNDER",
        company: "Apex Digital",
        initials: "DC"
    },
];

export function Testimonials() {
    const controls = useAnimationControls();
    const [isPaused, setIsPaused] = useState(false);

    // Duplicate testimonials for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    useEffect(() => {
        if (!isPaused) {
            controls.start({
                x: [0, -100 * testimonials.length + '%'],
                transition: {
                    duration: 90, // Slower scroll (was 60)
                    repeat: Infinity,
                    ease: 'linear',
                },
            });
        } else {
            controls.stop();
        }
    }, [isPaused, controls, testimonials.length]);

    return (
        <section className="bg-off-white py-24 overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-charcoal/50 font-medium">[ TESTIMONIALS ]</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight">
                        Don't Take Our Word For It<span className="text-gold">*</span>
                    </h2>
                    <p className="text-sm text-gold uppercase tracking-widest">*TAKE THEIRS</p>
                </div>
            </div>

            <div className="relative">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={controls}
                    onHoverStart={() => setIsPaused(true)}
                    onHoverEnd={() => setIsPaused(false)}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${testimonial.id}-${index}`}
                            className="min-w-[400px] md:min-w-[500px] bg-charcoal text-off-white p-8 rounded-sm border border-white/10 hover:bg-gold hover:border-gold transition-all duration-300 group cursor-pointer"
                            whileHover={{ scale: 1.02, y: -8 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-6">
                                <p className="text-sm md:text-base leading-relaxed text-white/80 group-hover:text-charcoal transition-colors">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10 group-hover:border-charcoal/20">
                                    <div className="w-12 h-12 rounded-full bg-gold/20 group-hover:bg-charcoal/20 flex items-center justify-center text-gold group-hover:text-charcoal font-heading font-bold transition-colors">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-white group-hover:text-charcoal transition-colors">{testimonial.name}</p>
                                        <p className="text-xs text-white/50 group-hover:text-charcoal/60 uppercase tracking-wider transition-colors">
                                            {testimonial.role} • {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
