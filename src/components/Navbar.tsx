"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    if (!mounted) return null;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-text-primary/10 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-text-primary">
                    Web<span className="text-primary">Cores</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-[0_0_15px_rgba(255,95,31,0.3)] hover:shadow-[0_0_25px_rgba(255,95,31,0.5)] hover:bg-primary-hover transition-all duration-300 transform hover:scale-105"
                    >
                        Schedule a Call
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        className="text-text-primary focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-secondary border-b border-text-primary/10 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-text-secondary hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="inline-block text-center w-full px-6 py-3 bg-primary text-white text-base font-semibold rounded-full shadow-[0_0_15px_rgba(255,95,31,0.3)]"
                                onClick={() => setIsOpen(false)}
                            >
                                Schedule a Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
