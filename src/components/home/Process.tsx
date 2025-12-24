"use client";

import { motion } from "framer-motion";
import { Lightbulb, Compass, Hammer, TrendingUp } from "lucide-react";

const steps = [
    {
        icon: <Lightbulb size={32} />,
        title: "Discovery",
        description: "We dive deep into your business goals and audience.",
    },
    {
        icon: <Compass size={32} />,
        title: "Strategy",
        description: "We craft a tailored roadmap for success.",
    },
    {
        icon: <Hammer size={32} />,
        title: "Build",
        description: "We bring the vision to life with pixel-perfect code.",
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Growth",
        description: "We launch, optimize, and scale your digital presence.",
    },
];

const Process = () => {
    return (
        <section className="py-24 bg-background-dark relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-inverse mb-4"
                    >
                        Our <span className="text-primary">Process</span>
                    </motion.h2>
                    <p className="text-gray-400">From concept to launch and beyond.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-text-primary/10 -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center bg-background md:bg-transparent p-6 md:p-0 rounded-xl border border-text-primary/5 md:border-none"
                            >
                                <div className="w-16 h-16 bg-background-secondary border border-primary/30 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_15px_rgba(255,95,31,0.2)] relative">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-background">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-text-inverse mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
