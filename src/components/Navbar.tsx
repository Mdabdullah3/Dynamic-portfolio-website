"use client";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className="px-5">
            <nav className="text-primary-foreground py-4 relative z-50 w-11/12 mx-auto uppercase text-[16px] tracking-wide font-semibold border-b border-primary-foreground/20">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold flex items-center">
                            <Image src="/assets/logo.png" alt="Logo" width={250} height={40} />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/" className="hover:text-gray-200">Demo</Link>
                        <Link href="/about" className="hover:text-gray-200">Themes</Link>
                        <Link href="/about" className="hover:text-gray-200">Examples</Link>

                        <Link href="/about" className="hover:text-gray-200">Tutorials</Link>
                        <Link href="/portfolio" className="hover:text-gray-200">Pricing</Link>
                        <Link href="/contact" className="hover:text-gray-200">Contact</Link>
                    </div>

                    {/* Mobile & Buttons */}
                    <div className="flex items-center space-x-4 ">

                        <button className="bg-primary-foreground text-muted flex items-center px-6 py-3 shadow rounded hover:bg-white hover:text-[#465AE9] transition-colors font-semibold uppercase">
                            Get Start Free
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;