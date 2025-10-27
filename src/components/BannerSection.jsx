// components/BannerSection.jsx
"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { ArrowUpRight, Star } from "lucide-react";

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
      <div className="relative w-11/12 mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Review Badge */}
          <div className="bg-[#FDE39C] rounded-tr-2xl rounded-bl-2xl p-6 w-full max-w-36 shadow-lg">
            <div className="w-5 mb-14 text-[#0F172A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="uuid-21c3e3bd-c1cb-4e49-8f0d-a9afed695d62"
                data-name="Layer 1"
                viewBox="0 0 60.87 70"
              >
                <path d="M47.576,49.286c-3.498,2.857-8.396,5-13.293,5-11.194,0-18.891-8.571-18.891-20s7.696-19.286,18.891-19.286c4.898,0,9.795,1.429,13.293,5l2.099,2.143,11.195-10.714-2.798-2.143C51.774,3.571,43.378,0,34.283,0,14.693,0,0,15,0,35s14.693,35,34.283,35c9.095,0,17.491-3.572,23.788-9.286l2.798-2.143-11.195-11.429-2.099,2.143Z"></path>
                <path d="M35,45.652c5.883,0,10.652-4.769,10.652-10.652s-4.769-10.652-10.652-10.652-10.652,4.769-10.652,10.652,4.769,10.652,10.652,10.652Z"></path>
              </svg>
            </div>
            <div className="mt-2 flex items-end gap-1 text-4xl font-bold text-[#0F172A]">
              5.0
              <Star className="w-4 h-4 fill-[#0F172A] text-[#0F172A] mb-2" />
            </div>
            <div className="text-sm font-medium text-[#0F172A] mt-1">
              165+ REVIEWS
            </div>
          </div>

          {/* Center: Headline */}
          <div className="flex-1 text-center lg:text-left">
            <div className="text-[7rem] font-bold text-white leading-28 tracking-tight  text-center">
              <div className="flex  items-center justify-center gap-3">
                PERSONAL
                <Image
                  src={
                    "https://digitalnomadshq.com.au/wp-content/uploads/2025/08/Managing-Directors-Ben-Jodi.png"
                  }
                  width={150}
                  height={50}
                  alt="Highlight"
                  className="rounded-tr-xl rounded-bl-xl mt-2"
                />
              </div>

              <h1>DIGITAL HOME,BUILT </h1>

              <div className="text-[#CDFFB6] flex items-center justify-center gap-3 ">
                <Image
                  src="/assets/arrow.svg"
                  width={90}
                  height={100}
                  alt="arrow"
                />
                FOR YOU
              </div>
            </div>
          </div>

          {/* Right: Team Photo + Card */}
          <div className="w-full max-w-[220px] mt-60">
            <div className="relative rounded-tr-xl rounded-bl-xl overflow-hidden shadow-xl">
              <Image
                src="https://digitalnomadshq.com.au/wp-content/uploads/2025/07/DIGITALNOMADHQ_TRIAL_EDITS-445.jpg"
                alt="Meet Our Team"
                width={200}
                height={600}
                className="w-full h-52 object-cover"
              />
              <div className=" bg-[#CDFFB6] text-black px-4 py-2 text-md font-semibold flex items-center justify-between">
                <h1>
                  MEET OUR <br /> TEAM
                </h1>
                <h1>
                  <ArrowUpRight />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
