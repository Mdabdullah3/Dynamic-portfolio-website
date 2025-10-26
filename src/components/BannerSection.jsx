// components/BannerSection.jsx
"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function BannerSection() {
  return (
    <div className="w-full h-screen">
      {/* Gradient + Background Image */}
      <div
        className="w-full h-full absolute top-0"
        style={{
          backgroundImage: `url('https://digitalnomadshq.com.au/wp-content/uploads/2025/07/Home-Hero-Gradient-Background_1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <Navbar />

      {/* Content */}
      <div className="relative  px-6 py-12 md:px-16 lg:px-24 xl:px-32 pt-20 pb-28">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Review Badge */}
          <div className="bg-yellow-200 rounded-xl p-6 w-full max-w-[180px] shadow-lg">
            <div className="text-3xl font-bold text-gray-800">C</div>
            <div className="mt-2 text-3xl font-bold text-gray-800">5.0 ★</div>
            <div className="text-xs font-medium text-gray-600 mt-1">
              165+ REVIEWS
            </div>
          </div>

          {/* Center: Headline */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tighter">
              REMARKABLE
              <br />
              MARKETING, GENUINE
              <br />
              <span className="text-green-300">→ PARTNERSHIP</span>
            </h1>
          </div>

          {/* Right: Team Photo + Card */}
          <div className="w-full max-w-[280px]">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Meet Our Team"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-400 text-white p-4 text-sm font-semibold">
                MEET OUR TEAM →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
