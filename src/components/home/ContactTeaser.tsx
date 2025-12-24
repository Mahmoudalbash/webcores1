"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ContactTeaser = () => {
    return (
        <section className="py-32 bg-background-brand-dark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-text-inverse mb-8">
                        Ready to start your <br />
                        <span className="text-primary">Digital Transformation?</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Let's discuss how we can help your business grow. Schedule a free consultation today.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center px-10 py-5 bg-primary text-white text-xl font-bold rounded-full shadow-[0_0_25px_rgba(255,95,31,0.4)] hover:shadow-[0_0_40px_rgba(255,95,31,0.6)] hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
                    >
                        Get in Touch
                        <ArrowRight className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactTeaser;
