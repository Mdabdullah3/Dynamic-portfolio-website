"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function HeroSection() {
    const images = [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    ];
    const positions = [
        { top: "70%", left: "18%", rotate: "-50deg" },
        { top: "50%", left: "30%", rotate: "-40deg" },
        { top: "30%", left: "40%", rotate: "-10deg" },
        { top: "30%", left: "60%", rotate: "10deg" },
        { top: "50%", left: "70%", rotate: "40deg" },
        { top: "70%", left: "82%", rotate: "50deg" },
    ];
    return (
        <div className="relative overflow-hidden py-20 h-[114vh] bg-linear-to-b via-background via-20% blur-in-2xl from-background to-black ">
            <section className="relative flex flex-col items-center justify-center">
                <div className="absolute top-0 left-0 w-full h-[85vh]">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="absolute transition-transform duration-700"
                            style={{
                                top: positions[index].top,
                                left: positions[index].left,
                                transform: `translate(-50%, -50%) rotate(${positions[index].rotate})`,
                            }}
                        >
                            <div className="rounded-3xl shadow-xl w-80 h-96 overflow-hidden bg-white">
                                <Image
                                    src={src}
                                    alt={`Arc image ${index}`}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </section>
            <div className="flex flex-col items-center justify-center text-center absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">

                <button className="flex flex-col items-center bg-linear-to-b via-[#feffda] from-[#eef4ff] to-[#e8fbef] w-40 h-40 justify-center rounded-full group  transition-colors duration-300 font-semibold tracking-wider text-md uppercase shadow-lg text-black hover:bg-linear-to-t hover:from-[#feffda] hover:to-[#e8fbef] via-[#eef4ff"> <ArrowUpRight className=" h-6 w-6 group-hover:translate-x-1 transition-transform duration-200 mb-2" />
                    Explore All <br /> Templates

                </button>
                <div className="mt-2 text-background">
                    <h1 className="text-5xl font-serif font-semibold uppercase leading-tighter tracking-tighter">Create your <span className=" italic font-normal">website</span> <br /> in minutes</h1>
                    <p className="text-md mt-2 font-normal italic font-serif">With our easy-to-use template builder. No coding skills required.</p>
                </div>
            </div>
        </div>
    );
}

