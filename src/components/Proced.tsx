"use client";

import { ReactNode } from "react";
import { Sparkles, Database, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ===== FeatureCard Component =====
interface FeatureCardProps {
    children: ReactNode;
    className?: string;
    color: "pink" | "yellow" | "green" | "purple" | "blue" | "dark-green";
}

const colorClasses = {
    pink: "bg-[#FF7BE5]",
    yellow: "bg-[#E3F68B]",
    green: "bg-[#42F1B3]",
    purple: "bg-[#9788FF]",
    blue: "bg-[#2C73FF]",
    "dark-green": "bg-[#005032]",
};

const FeatureCard = ({ children, className, color }: FeatureCardProps) => {
    return (
        <div
            className={cn(
                "rounded-[28px] p-6 shadow-lg backdrop-blur-sm",
                colorClasses[color],
                className
            )}
        >
            {children}
        </div>
    );
};

// ===== Main Index Component =====
const Proced = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-[hsl(216,100%,95%)] via-[hsl(268,100%,92%)] to-background">
            {/* Floating Cards */}
            <div className="absolute inset-0">
                {/* AI Generate Card - Top Left */}
                <FeatureCard
                    color="pink"
                    className="absolute left-[22%] top-[8%] w-[140px] h-[140px] flex flex-col items-center justify-center"
                >
                    <div className="w-full flex justify-center mb-3">
                        <div className="text-pink-200/40 text-5xl font-bold">AI</div>
                    </div>
                    <Button
                        size="sm"
                        className="bg-[hsl(260,70%,25%)] hover:bg-[hsl(260,70%,20%)] text-white rounded-full px-4 py-2 text-xs font-medium"
                    >
                        <Sparkles className="w-3 h-3 mr-1.5" />
                        Generate AI
                    </Button>
                </FeatureCard>

                {/* Discount Card - Top Center Right */}
                <FeatureCard
                    color="yellow"
                    className="absolute right-[28%] top-[6%] w-[140px] h-[140px] flex items-center justify-center"
                >
                    <div className="text-center">
                        <div className="bg-[hsl(260,70%,25%)] rounded-2xl p-4 inline-block">
                            <div className="text-white text-2xl font-bold mb-1">15% OFF</div>
                            <Button
                                size="sm"
                                className="bg-white hover:bg-gray-100 text-[hsl(260,70%,25%)] rounded-full px-4 py-1 text-xs font-semibold mt-1"
                            >
                                SHOP NOW
                            </Button>
                        </div>
                    </div>
                </FeatureCard>

                {/* Steps Card - Left Side */}
                <FeatureCard
                    color="green"
                    className="absolute left-[7%] top-[39%] w-[145px] h-[130px] p-4"
                >
                    <div className="text-xs font-semibold text-gray-800 mb-3">Just a few steps</div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div className="flex-1 h-0.5 bg-gray-300 rounded"></div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <div className="text-[10px] font-bold text-gray-600">2</div>
                        </div>
                        <div className="flex-1 h-0.5 bg-gray-300 rounded"></div>
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                            <div className="text-[10px] font-bold text-gray-600">3</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <div className="text-[10px] text-gray-600 mb-0.5">Full Name *</div>
                            <div className="h-1 bg-white/40 rounded"></div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-600 mb-0.5">Email Address *</div>
                            <div className="h-1 bg-white/40 rounded"></div>
                        </div>
                    </div>
                </FeatureCard>

                {/* File Size Card - Bottom Left */}
                <FeatureCard
                    color="purple"
                    className="absolute left-[25%] bottom-[12%] w-[140px] h-[140px] flex flex-col items-center justify-center"
                >
                    <div className="bg-white rounded-xl p-4 shadow-sm w-20 h-20 flex flex-col items-center justify-center mb-2">
                        <div className="text-4xl font-bold text-gray-800">100</div>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-gray-800">WebP</span>
                        <span className="text-gray-600">0.3 MB</span>
                    </div>
                </FeatureCard>

                {/* Backup Card - Right Side */}
                <FeatureCard
                    color="dark-green"
                    className="absolute right-[8%] top-[22%] w-[140px] h-[130px] flex flex-col items-center justify-center"
                >
                    <div className="relative w-20 h-20 mb-2">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="rgba(147, 112, 219, 0.3)"
                                strokeWidth="6"
                                fill="none"
                            />
                            <circle
                                cx="40"
                                cy="40"
                                r="34"
                                stroke="rgb(147, 112, 219)"
                                strokeWidth="6"
                                fill="none"
                                strokeDasharray="213.63"
                                strokeDashoffset="53.4"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Database className="w-6 h-6 text-purple-300" />
                        </div>
                    </div>
                    <div className="text-xs font-medium text-white">Backup in progress</div>
                </FeatureCard>

                {/* Product Card - Bottom Right */}
                <FeatureCard
                    color="blue"
                    className="absolute right-[16%] bottom-[18%] w-[140px] h-[130px] p-4"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div className="text-2xl font-bold text-white">$34</div>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                            ))}
                        </div>
                    </div>
                    <div className="mt-auto">
                        <Button
                            size="sm"
                            className="w-full bg-white hover:bg-gray-100 text-gray-800 rounded-full text-xs font-semibold py-2"
                        >
                            <Plus className="w-3 h-3 mr-1" />
                            Add to Cart
                        </Button>
                    </div>
                </FeatureCard>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
                <h1 className=" text-center text-6xl font-black text-foreground md:text-7xl mb-8">
                    Everything you need
                    <br />
                    <span className="inline-block">...and even more</span>
                </h1>

                <Button
                    size="lg"
                    className="bg-black hover:bg-gray-900 text-white rounded-md px-8 py-6 text-base font-medium shadow-xl"
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export default Proced;
