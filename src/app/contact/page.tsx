"use client";

import { motion } from "framer-motion";
import ParallaxBackground from "@/components/ParallaxBackground";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="bg-background min-h-screen pb-0">
            {/* Header */}
            <ParallaxBackground
                bgImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
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
                        Get in <span className="text-primary">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-2xl mx-auto"
                    >
                        Ready to start your project? Let's talk.
                    </motion.p>
                </div>
            </ParallaxBackground>

            <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-text-primary mb-6">
                                Contact <span className="text-primary">Info</span>
                            </h2>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                Have a question or want to discuss a project? Reach out to us via email or visit our office.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-background-secondary rounded-lg text-primary border border-text-primary/5">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-text-primary font-semibold mb-1">Email Us</h3>
                                    <a href="mailto:info@webcores.nl" className="text-text-secondary hover:text-primary transition-colors">
                                        info@webcores.nl
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-background-secondary rounded-lg text-primary border border-text-primary/5">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-text-primary font-semibold mb-1">Visit Us</h3>
                                    <p className="text-text-secondary">
                                        Netherlands<br />
                                        (By Appointment Only)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-background-secondary rounded-lg text-primary border border-text-primary/5">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-text-primary font-semibold mb-1">Call Us</h3>
                                    <p className="text-text-secondary">+31 6 1234 5678</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3"
                    >
                        <form className="bg-background-secondary p-8 md:p-10 rounded-2xl border border-text-primary/5 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-background border border-text-primary/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-background border border-text-primary/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">Service Interest</label>
                                <select
                                    id="service"
                                    className="w-full bg-background border border-text-primary/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                                >
                                    <option value="">Select a Service</option>
                                    <option value="marketing">Digital Marketing</option>
                                    <option value="seo">SEO Optimization</option>
                                    <option value="web-design">Web Design & Dev</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="mb-8">
                                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-background border border-text-primary/10 rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] hover:bg-primary-hover transition-all duration-300 flex items-center justify-center"
                            >
                                Send Message
                                <Send size={20} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
                    }}
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="p-4 bg-primary rounded-full shadow-[0_0_30px_rgba(255,95,31,0.6)] animate-pulse">
                        <MapPin size={32} className="text-white" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
