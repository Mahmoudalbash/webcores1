"use client";

import { motion } from "framer-motion";
import { Megaphone, Search, Code, Settings } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Megaphone size={40} />,
        title: "Digital Marketing",
        description: "Data-driven strategies to amplify your brand and drive growth.",
        link: "/services#marketing",
    },
    {
        icon: <Search size={40} />,
        title: "SEO Optimization",
        description: "Dominate search rankings and increase organic traffic.",
        link: "/services#seo",
    },
    {
        icon: <Code size={40} />,
        title: "Web Design & Dev",
        description: "Stunning, high-performance websites tailored to your needs.",
        link: "/services#web-design",
    },
    {
        icon: <Settings size={40} />,
        title: "Maintenance",
        description: "Keep your digital assets secure, fast, and up-to-date.",
        link: "/services#maintenance",
    },
];

const ServicesTeaser = () => {
    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
                    >
                        Our <span className="text-primary">Experience</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary max-w-2xl mx-auto"
                    >
                        Comprehensive digital solutions designed to elevate your business.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={service.link} className="block group h-full">
                                <div className="bg-background-secondary p-8 rounded-2xl border border-text-primary/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                    <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300 p-4 bg-text-primary/5 rounded-full group-hover:bg-primary/10">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesTeaser;
