"use client";
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
        <div className="relative overflow-hidden py-20 h-screen">
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
            <div className="flex flex-col justify-center absolute bottom-4 left-[35%]">
                <h1 className="text-3xl font-semibold text-center">Our Popular Templates</h1>
                <p className="text-center text-lg mt-2">Every project is unique. We offer a wide range of templates <br /> to fit your needs and preferences. you can also create your own template</p>
                <div className="flex justify-center mt-3">
                    <button className="bg-muted items-center w-60  text-white font-bold tracking-wider mt-2 text-sm uppercase px-5 py-4 rounded-2xl">See All Templates</button>
                </div>

            </div>
        </div>
    );
}

