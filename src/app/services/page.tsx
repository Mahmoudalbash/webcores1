"use client";

import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Megaphone, Search, Code, Settings, CheckCircle } from "lucide-react";

const services = [
    {
        id: "marketing",
        title: "Digital Marketing",
        description:
            "We craft data-driven marketing strategies that amplify your brand's voice and drive measurable growth. From social media campaigns to targeted ads, we ensure your message reaches the right audience at the right time.",
        features: ["Social Media Management", "PPC Advertising", "Content Strategy", "Email Marketing"],
        icon: <Megaphone size={32} />,
        image: "digitalmarketing.jpg",
    },
    {
        id: "seo",
        title: "SEO Optimization",
        description:
            "Visibility is key. We optimize your digital presence to dominate search rankings, driving organic traffic and increasing conversions. Our technical and content-focused approach ensures long-term success.",
        features: ["Keyword Research", "On-Page Optimization", "Technical SEO Audits", "Link Building"],
        icon: <Search size={32} />,
        image: "seooptimization.jpg",
    },
    {
        id: "web-design",
        title: "Web Design",
        description:
            "Your website is your digital storefront. We design and build stunning, high-performance websites that captivate visitors and convert them into loyal customers. Mobile-first, fast, and secure.",
        features: ["Custom UI/UX Design", "Responsive Development", "E-commerce Solutions", "CMS Integration"],
        icon: <Code size={32} />,
        image: "/webdesign.jpg",
    },
    {
        id: "maintenance",
        title: "Maintenance",
        description:
            "Digital excellence requires ongoing care. We provide comprehensive maintenance packages to keep your website secure, fast, and up-to-date, allowing you to focus on running your business.",
        features: ["Security Updates", "Performance Monitoring", "Regular Backups", "Content Updates"],
        icon: <Settings size={32} />,
        image: "maintenance.jpeg",
    },
];

const ServicesPage = () => {
    return (
        <div className="bg-background min-h-screen pb-24">
            {/* Header */}
            <ParallaxBackground
                bgImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
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
                        Our <span className="text-primary">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Comprehensive solutions to elevate your digital presence.
                    </motion.p>
                </div>
            </ParallaxBackground>

            {/* Services List */}
            <div className="container mx-auto px-6 py-24 space-y-32">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        id={service.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            } items-center gap-16`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-text-primary/10 aspect-video group">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>
                        </div>

                        {/* Text Side */}
                        <div className="w-full md:w-1/2">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
                                    {service.title}
                                </h2>
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>
                            <ul className="space-y-4">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-center space-x-3 text-text-primary">
                                        <CheckCircle size={20} className="text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
