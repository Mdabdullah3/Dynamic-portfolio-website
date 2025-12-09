import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const sidebarVariants = {
    closed: {
        x: 400, // Start off-screen to the right (adjust 400 to your sidebar width in px)
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 35,
        }
    },
    open: {
        x: 0, // Slide onto the screen
        transition: {
            type: "spring" as const,
            stiffness: 300,
            damping: 35,
        }
    }
};
// Data for navigation links
const navLinks = [
    { name: "Demo", href: "/" },
    { name: "Themes", href: "/themes" },
    { name: "Examples", href: "/examples" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="bg-[#465AE9]">
            <nav className="text-white py-4 relative z-50 w-11/12 mx-auto px-5 uppercase text-[16px] tracking-wide font-semibold border-b border-white/20">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <Image
                            src={"/assets/logo.png"}
                            alt="Logo"
                            width={250}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="hover:text-gray-200 transition-colors">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Button & Mobile Toggle */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop CTA Button */}
                        <a
                            href="/get-started"
                            className="bg-white text-[#465AE9] hidden sm:flex items-center px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all font-bold uppercase text-sm group"
                        >
                            Get Started Free
                            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        {/* Mobile Hamburger Icon */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar Menu (Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={sidebarVariants}
                        className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-white shadow-2xl lg:hidden z-50 p-6 text-[#465AE9] flex flex-col space-y-6"
                    >
                        {/* Close Button at the top of the sidebar */}
                        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                            <h2 className="text-2xl font-bold uppercase tracking-widest">Menu</h2>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Close navigation menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Mobile Navigation Links */}
                        <nav className="flex flex-col space-y-4 text-lg font-medium">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    className="block py-2 rounded-lg hover:bg-[#465AE9]/10 hover:text-[#465AE9] transition-all px-3"
                                    onClick={toggleMenu}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + navLinks.indexOf(link) * 0.05 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </nav>

                        {/* Mobile CTA Button */}
                        <a
                            href="/get-started"
                            className="mt-auto bg-[#465AE9] text-white flex items-center justify-center px-6 py-3 rounded-full shadow-lg hover:bg-[#394ac7] transition-colors font-bold uppercase text-sm group"
                            onClick={toggleMenu}
                        >
                            Get Started Free
                            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop for accessibility and focus */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-30 lg:hidden"
                        onClick={toggleMenu}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;