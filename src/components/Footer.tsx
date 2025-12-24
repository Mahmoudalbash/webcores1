import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-text-inverse mb-6 block">
                            Web<span className="text-primary">Cores</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Empowering businesses through digital transformation. We build high-performance websites and data-driven marketing strategies.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-text-inverse font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-text-inverse font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services#marketing" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Digital Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#seo" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    SEO Optimization
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#web-design" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Web Design & Dev
                                </Link>
                            </li>
                            <li>
                                <Link href="/services#maintenance" className="text-gray-400 hover:text-primary text-sm transition-colors">
                                    Maintenance
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-text-inverse font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-primary mt-0.5" />
                                <span>Netherlands</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-primary" />
                                <a href="mailto:info@webcores.nl" className="hover:text-primary transition-colors">
                                    info@webcores.nl
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} WebCores. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-500 hover:text-primary text-xs transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-primary text-xs transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
