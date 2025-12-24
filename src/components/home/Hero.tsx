"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "../ParallaxBackground";

const Hero = () => {
    return (
        <section className="h-screen w-full overflow-hidden">
            <ParallaxBackground
                bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                overlayOpacity={0}
                className="h-full w-full flex items-center justify-center"
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-text-inverse mb-6">
                            Building <span className="text-primary">Digital Excellence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto">
                            Your partner for Marketing, SEO, and High-Performance Websites.
                            We turn complex problems into elegant digital solutions.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,95,31,0.4)] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)] transition-all duration-300 transform hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center">
                                    Schedule a Call
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>

                            <Link
                                href="/services"
                                className="px-8 py-4 bg-transparent border border-white/20 text-text-inverse text-lg font-medium rounded-full hover:bg-white/10 transition-all duration-300"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </motion.div>
            </ParallaxBackground>
        </section>
    );
};

export default Hero;
