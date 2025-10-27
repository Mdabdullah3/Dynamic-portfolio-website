"use client"
import React from "react";
import Marquee from "react-fast-marquee";
const CustomerPreview: React.FC = () => {
    const ourPartner = [
        "Fast Company",
        "The Browser Company",
        "Bloomberg",
        "Inverse",
        "The Verge",
        "TechCrunch",
        "Wired",
        "The New York Times",
        "The Guardian",
        "The Economist"
    ]
    return (
        <div className=" w-full  h-20  z-20  relative">
            {/* Wavy Top */}
            <div className="absolute -top-2 z-10 py-4 left-0 w-full h-4 bg-repeat-x bg-[url('/assets/wavy-blue-top.svg')]"></div>
            {/* Wavy Bottom */}
            <div className="absolute bottom-0 left-0 w-full h-4 bg-repeat-x bg-[url('/assets/wavy-blue-bottom.svg')]"></div>
            <div className="flex  bg-black  py-5">
                <Marquee
                    gradient={false}
                    speed={80}
                    delay={0}
                    play
                    direction="right"
                >
                    {ourPartner?.map((partner) => (
                        <div
                            key={partner}
                            className="mx-10 mt-1"
                        >

                            <h1 className="text-center text-secondary uppercase font-bold text-md ">
                                {partner}
                            </h1>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default CustomerPreview;
