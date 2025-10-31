"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// NOTE: The testimonial array has 13 entries to support the 6-1-6 visual structure.
const testimonials = [
    // 0: Top-most left (Red Hair)
    { name: "Jessica Alba", title: "Creative Director", image: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=800&q=80", bg: "bg-[#fff3f2]" },
    // 1: Second left (Man in Grey Shirt)
    { name: "Ethan Hunt", title: "Data Scientist", image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=800&q=80", bg: "bg-[#e1f0ff]" },
    // 2: Third left (Man in Blue Shirt)
    { name: "James Carter", title: "Software Engineer", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", bg: "bg-[#e2f1f8]" },
    // 3: Fourth left (Short Hair Woman)
    { name: "Sophia Kim", title: "Marketing Lead", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80", bg: "bg-[#e8f5e9]" },
    // 4: Fifth left (Curly Hair Woman)
    { name: "Chloe Grace", title: "UX Researcher", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", bg: "bg-[#fbe7e8]" },
    // 5: Bottom-most left (Blonde Woman)
    { name: "Olivia Brown", title: "Designer", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80", bg: "bg-[#f9fbe7]" },

    // 6: Center (Alessia Fernandes)
    { name: "Alessia Fernandes", title: "Business Analyst", image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=800&q=80", bg: "bg-[#fff7e1]" },

    // 7: Top-most right (Woman in Green Top)
    { name: "Emily Davis", title: "Product Manager", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", bg: "bg-[#fff3e0]" },
    // 8: Second right (Woman with Glasses)
    { name: "Nora Williams", title: "Content Creator", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", bg: "bg-[#e4f3ff]" },
    // 9: Third right (Man in Suit)
    { name: "Michael Lee", title: "UI Designer", image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&q=80", bg: "bg-[#f3e5f5]" },
    // 10: Fourth right (Man in White Shirt)
    { name: "Liam Patel", title: "HR Manager", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", bg: "bg-[#e1f5fe]" },
    // 11: Fifth right (Man in T-shirt)
    { name: "Ryan Gosling", title: "Sales Executive", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", bg: "bg-[#f9fbe7]" },
    // 12: Bottom-most right (Woman in Colorful Top)
    { name: "Rachel Adams", title: "Support Specialist", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", bg: "bg-[#fce4ec]" },
];

const getProps = (position) => {
    // --- Properties for Left Side (-1 to -6) ---
    if (position < 0) {
        const p = Math.abs(position);
        switch (p) {
            case 1: // Closest to center, slightly high (Woman with short dark hair)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.9, zIndex: 10, offset: "-translate-x-[34rem] -translate-y-[2rem]" };
            case 2: // Second outwards, low (Man in Blue Shirt)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.85, zIndex: 9, offset: "-translate-x-[34rem] translate-y-[10rem]" };
            case 3: // Third outwards, middle/low (Short Hair Woman)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.8, zIndex: 8, offset: "-translate-x-[23rem] translate-y-[2rem]" };
            case 4: // Fourth outwards, high (Red Hair Woman - Top Left)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.75, zIndex: 7, offset: "-translate-x-[12rem] translate-y-[11rem]" };
            case 5: // Fifth outwards, middle (Man in Grey Shirt)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.7, zIndex: 6, offset: "-translate-x-[12rem] -translate-y-[2rem]" };
            case 6: // Farthest outwards, low (Blonde Woman - Bottom Left)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.65, zIndex: 5, offset: "-translate-x-[23rem] translate-y-[15rem]" };
            default:
                return { size: "w-0 h-0", scale: 0, opacity: 0, zIndex: 1, offset: "translate-x-0 translate-y-0" };
        }
    }

    // --- Properties for Right Side (1 to 6) ---
    if (position > 0) {
        const p = position;
        switch (p) {
            case 1: // Closest to center, high (Man in White Shirt)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.9, zIndex: 10, offset: "translate-x-[18rem] -translate-y-[2rem]" };
            case 2: // Second outwards, low (Man in T-Shirt)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.85, zIndex: 9, offset: "translate-x-[18rem] translate-y-[11rem]" };
            case 3: // Third outwards, middle/high (Man in Suit)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.8, zIndex: 8, offset: "translate-x-[29rem] translate-y-[2rem]" };
            case 4: // Fourth outwards, high (Woman in Green Top - Top Right)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.75, zIndex: 7, offset: "translate-x-[29rem] translate-y-[15rem]" };
            case 5: // Fifth outwards, middle (Woman with Glasses)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.7, zIndex: 6, offset: "translate-x-[40rem] translate-y-[11rem]" };
            case 6: // Farthest outwards, low (Woman in Colorful Top - Bottom Right)
                return { size: "w-40 h-48", scale: 0.95, opacity: 0.65, zIndex: 5, offset: "translate-x-[40rem] -translate-y-[2rem]" };
            default:
                return { size: "w-0 h-0", scale: 0, opacity: 0, zIndex: 1, offset: "translate-x-0 translate-y-0" };
        }
    }
    // Center element has no offset from the 50%/50% anchor
    return { size: "w-0 h-0", scale: 1, opacity: 1, zIndex: 50, offset: "" };
};

const TestimonialImage = ({ testimonial, position, isCenter }) => {
    const { size, scale, opacity, zIndex, offset } = getProps(position);

    const animationProps = isCenter
        ? { scale: 1, opacity: 1, y: 0 }
        : { scale: scale, opacity: opacity, y: 0 };

    // The logic in getProps now provides the correct offset string (including the direction)
    const finalOffset = offset;

    // Base classes for absolute positioning, transitions, and zIndex
    const baseClasses = `absolute rounded-[1.25rem] overflow-hidden shadow-xl transform transition-all duration-700 ease-in-out`;

    return (
        <motion.div
            className={`${baseClasses} ${testimonial.bg} ${isCenter ? 'w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 z-50 p-2 shadow-[0_20px_40px_-5px_rgba(52,80,255,0.3)]' : size + ' ' + finalOffset + ' ' + zIndex} ${isCenter ? '' : 'hidden md:block'}`}
            initial={false}
            animate={animationProps}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                left: '40%',
                top: '5%',
                // Apply the base centering and then the specific offset (which already contains the translate-x/y)
                transform: `translate(-50%, -50%) ${finalOffset}`,
                borderRadius: isCenter ? '1.5rem' : '1.25rem', // Center card looks slightly more rounded
            }}
        >
            <div className={`w-full h-full relative`}>
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className={`object-cover ${isCenter ? 'rounded-2xl' : 'rounded-xl'}`}
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 300px"
                    priority={isCenter}
                />
            </div>

            {/* Center Info Card Details (Matching the image's layout) */}
            {isCenter && (
                <div className="absolute inset-x-0 bottom-0 pt-10 pb-6 bg-linear-to-t from-white/90 to-white/0 text-center rounded-b-2xl">
                    <p className="font-bold text-gray-900 text-lg md:text-xl">
                        {testimonial.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mt-1">
                        {testimonial.title}
                    </p>
                </div>
            )}
        </motion.div>
    );
};


export default function TestimonialSection() {
    const [index, setIndex] = useState(6); // Start at index 6 (Alessia) to match the image exactly

    const next = useCallback(() => setIndex((prev) => (prev + 1) % testimonials.length), []);
    const prev = useCallback(() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), []);

    // Auto-scroll logic 
    useEffect(() => {
        const interval = setInterval(next, 4000);
        return () => clearInterval(interval);
    }, [next]);

    // Function to get the indices for the 13 visible positions (Center is at position 6)
    const getVisibleIndices = () => {
        const indices = [];
        const length = testimonials.length;

        // Populate indices from -6 (far left) to 6 (far right) relative to the center index
        for (let i = -6; i <= 6; i++) {
            // Circular logic for the index in the testimonials array
            const testimonialIndex = (index + i + length) % length;
            indices.push(testimonialIndex);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    return (
        <div className="relative flex flex-col items-center justify-start overflow-hidden bg-linear-to-b  from-background via-[#ffdaf1] to-background]">
            {/* Background Grid Pattern (For visual flair like the image) */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e0eaff" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>


            {/* Top Text */}
            <div className="z-10 mb-16 pt-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-1 text-center relative  ">
                    Our Trusted <em className="font-serif font-normal italic">Users</em>
                </h2>
                <p className="text-lg text-center">We have a wide range of users from all over the world. from various Role and Industries, <br /> Join our community and create your profile online </p>
            </div>
            {/* Carousel Navigation (Placed above the carousel) */}
            {/* <div className="flex space-x-4  relative z-10">
                <button
                    onClick={prev}
                    className="bg-white shadow-md p-2 rounded-full hover:scale-105 transition border border-gray-200"
                    aria-label="Previous Testimonial"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-500" />
                </button>
                <button
                    onClick={next}
                    className="bg-white shadow-md p-2 rounded-full hover:scale-105 transition border border-gray-200"
                    aria-label="Next Testimonial"
                >
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                </button>
            </div> */}

            {/* Carousel Container */}
            <div className="relative w-full h-[500px] max-w-7xl">
                {/* Render all 13 visible testimonials */}
                {visibleIndices.map((tIndex, arrayPosition) => {
                    const testimonialData = testimonials[tIndex];
                    const isCenter = arrayPosition === 6; // Center element is at index 6 of the visibleIndices array

                    return (
                        <TestimonialImage
                            key={tIndex}
                            testimonial={testimonialData}
                            position={arrayPosition - 6} // Relative position (-6 to 6)
                            isCenter={isCenter}
                        />
                    );
                })}
            </div>
        </div>
    );
}