import Image from "next/image";

const ProcessSection = () => {
    return (
        <section className="w-full relative bg-[#0a0a0a] text-white py-20 px-4 lg:px-8" style={{
            backgroundImage: `url('https://cdn.prod.website-files.com/6820cfbf0a660da1a57036ca/6826b6cca1f9d43ac73f6ab4_Background%20(4).svg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    {/* Left Side - Process Steps */}
                    <div className="col-span-3">
                        {/* Header */}
                        <div className="mb-12">
                            <div className="inline-block bg-transparent border border-[#ff6b35] rounded-full px-6 py-2 mb-6">
                                <span className="text-[#ff6b35] text-sm font-medium">Working Step</span>
                            </div>
                            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Solution of Process.
                            </h2>
                        </div>

                        {/* Process Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Step 01 - Green Card */}
                            <div className="bg-[#4ade80] rounded-3xl p-8 h-[250px] flex flex-col justify-between relative">
                                <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 w-fit">
                                    <span className="text-[10px] font-semibold text-black mr-1">Step</span>
                                    <span className="text-sm font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-tight">
                                        Initial<br />Consultation
                                    </h3>
                                </div>
                            </div>

                            {/* Step 02 - White Card with Orange Gradient */}
                            <div className="bg-[#f5f5f5] rounded-3xl p-8 h-[250px] flex flex-col justify-between relative overflow-hidden">
                                <div>
                                    <h3 className="text-3xl font-bold text-black leading-tight relative z-10">
                                        Strategy<br />Development
                                    </h3>
                                </div>

                                {/* Orange Gradient Blob */}
                                <div className="absolute bottom-0 left-0 w-32 h-32">
                                    <div className="w-full h-full bg-linear-to-tr from-[#ff6b35] via-[#ff8c5a] to-transparent opacity-80 blur-2xl rounded-full"></div>
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI2ZmNmIzNSIgb3BhY2l0eT0iMC44Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNkb3RzKSIvPjwvc3ZnPg==')] opacity-60"></div>
                                </div>

                                <div className="inline-flex items-center bg-black rounded-full px-4 py-1.5 w-fit relative z-10">
                                    <span className="text-[10px] font-semibold text-white mr-1">Step</span>
                                    <span className="text-sm font-bold text-white">02</span>
                                </div>
                            </div>

                            {/* Step 03 - Purple Card */}
                            <div className="bg-[#762EC2] rounded-3xl p-8 h-[250px] flex flex-col justify-between relative">
                                <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 w-fit">
                                    <span className="text-[10px] font-semibold text-black mr-1">Step</span>
                                    <span className="text-sm font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white leading-tight">
                                        Execution &<br />Launch
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Testimonial */}
                    <div className="relative col-span-2">
                        {/* Large Quote Marks */}
                        <div className="absolute -top-16 -left-4 lg:-left-8">
                            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="opacity-20">
                                <path d="M0 50C0 30 10 15 25 15C35 15 42 22 42 32C42 42 35 49 25 49C23 49 21 48.5 19 47.5C19 62 27 70 40 70V85C15 85 0 70 0 50Z" fill="currentColor" />
                                <path d="M58 50C58 30 68 15 83 15C93 15 100 22 100 32C100 42 93 49 83 49C81 49 79 48.5 77 47.5C77 62 85 70 98 70V85C73 85 58 70 58 50Z" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Testimonial Content */}
                        <div className="relative z-10 pl-0 lg:pl-8">
                            <p className="text-xl lg:text-2xl text-white leading-relaxed mb-8 font-semibold">
                                We specializes in providing a range of services aimed at helping companies establish and enhance their presence in the digital world.
                            </p>

                            <div className="border-t border-gray-700 pt-6">
                                <h4 className="text-xl font-bold text-white mb-1">Mr. David Milar</h4>
                                <p className="text-gray-400 text-sm">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-32 opacity-20">
                <Image src="https://cdn.prod.website-files.com/6820cfbf0a660da1a57036ca/682359ac6872f67e0e967558_M.svg" width={200} height={200} alt="image" />
            </div>
        </section>
    );
};

export default ProcessSection;
