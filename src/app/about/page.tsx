"use client";

import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Target, Users, Zap, Shield } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Header */}
            <ParallaxBackground
                bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                overlayOpacity={0.8}
                className="h-[50vh] flex items-center justify-center"
            >
                <div className="text-center relative z-10 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-text-primary mb-6"
                    >
                        About <span className="text-primary">WebCores</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Empowering businesses through digital transformation.
                    </motion.p>
                </div>
            </ParallaxBackground>

            <div className="container mx-auto px-6 py-24 space-y-32">
                {/* Our Story */}
                <section className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
                            Our <span className="text-primary">Story</span>
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            Founded with a vision to bridge the gap between creative design and technical excellence,
                            WebCores started as a small team of passionate developers and strategists. We saw a need
                            for a digital agency that didn't just build websites, but built comprehensive digital ecosystems
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Today, we partner with businesses of all sizes to help them navigate the complex digital landscape.
                            Our journey is defined by a relentless pursuit of innovation and a commitment to our clients' success.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-text-primary/10 aspect-square">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>
                    </motion.div>
                </section>

                {/* Mission */}
                <section className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 bg-primary/10 rounded-full text-primary mb-6">
                            <Target size={40} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Our <span className="text-primary">Mission</span>
                        </h2>
                        <p className="text-xl text-text-secondary leading-relaxed">
                            "To empower businesses through digital transformation, providing cutting-edge solutions
                            that drive growth, enhance visibility, and create meaningful connections with audiences."
                        </p>
                    </motion.div>
                </section>

                {/* Why Us */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
                            Why <span className="text-primary">Choose Us?</span>
                        </h2>
                        <p className="text-text-secondary">What sets us apart from the competition</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users size={32} />,
                                title: "Transparent",
                                description: "We believe in open communication. No hidden fees, no jargon. Just clear, honest partnership.",
                            },
                            {
                                icon: <Zap size={32} />,
                                title: "Fast & Efficient",
                                description: "We value your time. Our agile process ensures rapid delivery without compromising quality.",
                            },
                            {
                                icon: <Shield size={32} />,
                                title: "Creative & Secure",
                                description: "We combine artistic vision with robust security practices to build safe, stunning digital assets.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-background-secondary p-8 rounded-2xl border border-text-primary/5 hover:border-primary/50 transition-all duration-300 text-center group"
                            >
                                <div className="w-16 h-16 mx-auto bg-background border border-text-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-text-primary mb-3">{item.title}</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
