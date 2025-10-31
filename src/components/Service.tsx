"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Service {
    number: string;
    title: string;
    description: string;
    image: string;
    backgroundImage: string;
}

const services: Service[] = [
    {
        number: "01",
        title: "UI/UX",
        description: "Custom websites designed to captivate your audience and drive conversions.",
        image: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif",
        backgroundImage: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aadb358ff43bfc9104d993_service-bg.avif"
    },
    {
        number: "02",
        title: "Growth",
        description: "Enhance your online visibility and attract qualified traffic with our proven SEO.",
        image: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif",
        backgroundImage: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aadb358ff43bfc9104d993_service-bg.avif"
    },
    {
        number: "03",
        title: "Branding",
        description: "Craft a memorable brand identity with impactful design and messaging.",
        image: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif",
        backgroundImage: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aadb358ff43bfc9104d993_service-bg.avif"
    },
    {
        number: "04",
        title: "Code",
        description: "Build and scale your online store with seamless e-commerce solutions tailored for growth.",
        image: "https://cdn.prod.website-files.com/688de14ac9436b63c75efde2/68ac0b0bfc6971e1a6c0d958_uxui.avif",
        backgroundImage: "https://cdn.prod.website-files.com/6878854b4782d46450f79836/68aadb358ff43bfc9104d993_service-bg.avif"
    },
];

const ServicesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen bg-background  px-6 md:px-12 pt-72 bg-linear-to-b  from-background via-[#faffe2] via-20% to-background]">
            <div className="max-w-7xl mx-auto pt-10">
                {/* Header */}
                <div className="text-center mb-16">
                   
                    <h2 className="text-5xl md:text-6xl font-bold leading-14">
                        From idea to <em className="italic font-serif font-normal">execution</em>
                        <br />
                        we&lsquo;ve got you covered
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="space-y-0 relative">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative border-b border-border last:border-b-0 overflow-visible group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Background Image - Full background on hover */}
                            <div
                                className={`absolute inset-0 transition-all duration-700 ease-out overflow-hidden z-10 ${hoveredIndex === index ? "opacity-100 scale-105 duration-900" : "opacity-0"
                                    }`}
                            >
                                <img
                                    src={service.backgroundImage}
                                    alt=""
                                    className="w-full h-full object-cover scale-120 transform-gpu"
                                />
                                {/* Overlay for better text readability */}
                                <div className="absolute inset-0 bg-black/40" />
                            </div>

                            {/* Center Image - Positioned absolutely to overlap other sections */}
                            <div className={`absolute left-[34%] top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 transition-all duration-600 ease-out ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-[300px] h-[300px] transform-gpu  rounded-3xl"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 py-8 z-20">
                                {/* Left Side - Number and Title */}
                                <div className="flex items-center gap-8 md:gap-12">
                                    <span
                                        className={`text-xl font-medium transition-colors duration-600 ${hoveredIndex === index ? "text-white" : "text-foreground"
                                            }`}
                                    >
                                        {service.number}
                                    </span>
                                    <h3
                                        className={`text-4xl md:text-5xl font-medium transition-colors duration-600 ${hoveredIndex === index ? "text-white" : "text-foreground"
                                            }`}
                                    >
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Right Side - Description and Arrow */}
                                <div className="flex items-center justify-between gap-6">
                                    <p
                                        className={`text-lg md:text-xl max-w-md transition-colors duration-600 ${hoveredIndex === index ? "text-white" : "text-foreground"
                                            }`}
                                    >
                                        {service.description}
                                    </p>
                                    <ArrowUpRight
                                        className={`w-8 h-8 flex-shrink-0 transition-colors duration-600 ${hoveredIndex === index ? "text-white" : "text-foreground"
                                            }`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;