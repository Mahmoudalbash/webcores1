"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// Placeholder data - User can easily update this
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
        link: "https://example.com",
    },
    {
        id: 2,
        title: "Financial Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        link: "https://example.com",
    },
    {
        id: 3,
        title: "Tech Startup Landing",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        link: "https://example.com",
    },
    {
        id: 4,
        title: "Mobile App Interface",
        category: "App Design",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        link: "https://example.com",
    },
];

const OurWork = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, []);

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                            Our <span className="text-primary">Work</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl">
                            A showcase of our recent projects and digital solutions.
                            Drag to explore more.
                        </p>
                    </div>

                    {/* Navigation buttons could go here if needed */}
                </motion.div>
            </div>

            <div className="pl-6 md:pl-[max(24px,calc((100vw-1280px)/2+24px))]">
                <motion.div
                    ref={carousel}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="min-w-[300px] md:min-w-[400px] relative group"
                            >
                                <Link href={project.link} target="_blank" className="block">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-text-primary/10">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${project.image})` }}
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            <ArrowUpRight className="text-primary w-5 h-5" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">
                                        {project.category}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurWork;
