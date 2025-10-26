// components/Navbar.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="text-[#fafbff] p-4 relative z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-bold flex items-center">
                        <Image src="/assets/logo.png" alt="Logo" width={250} height={40} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="hover:text-gray-200">Home</Link>
                    <Link href="/about" className="hover:text-gray-200">About Us</Link>

                    <div className="relative group">
                        <button className="flex items-center hover:text-gray-200 focus:outline-none">
                            Pages
                            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Link href="/services" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
                            <Link href="/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                        </div>
                    </div>

                    <Link href="/portfolio" className="hover:text-gray-200">Portfolio</Link>
                    <Link href="/contact" className="hover:text-gray-200">Contact</Link>
                </div>

                {/* Mobile & Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="p-2 border border-white rounded-md hover:bg-white hover:text-[#465AE9] transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </button>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center">
                        Let's Talk
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;