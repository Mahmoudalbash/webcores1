"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutTeaser = () => {
    return (
        <section className="py-24 bg-background-secondary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video md:aspect-square">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')",
                                }}
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                            Who is <span className="text-primary">WebCores?</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            We are a team of passionate digital craftsmen, strategists, and innovators.
                            Our mission is to empower businesses by bridging the gap between creative design
                            and technical excellence. We don't just build websites; we build digital experiences
                            that drive results.
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex items-center text-primary font-semibold hover:text-text-primary transition-colors group"
                        >
                            Read More About Us
                            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutTeaser;
