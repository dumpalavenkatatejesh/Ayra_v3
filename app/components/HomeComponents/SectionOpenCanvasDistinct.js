import Image from 'next/image';
import React from 'react';

const SectionOpenCanvasDistinct = () => {
    return (
        <>

            <div className="w-full bg-[#f7f8fa] py-12 px-2 md:px-0">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border border-[#e5e7eb] rounded-xl overflow-hidden">
                    {/* Left Card */}
                    <div className="flex flex-col items-center text-center px-8 py-10 bg-white h-full">
                        <Image src="/home/an-open-canvas.png" alt="Open Canvas" width={176} height={176} className="w-44 h-44 mx-auto mb-8 shadow-2xl rounded-none" />
                        <h2 className="text-4xl font-schabo text-[#002561] mb-4">AN OPEN CANVAS</h2>
                        <p className="text-[#2050B1] mb-2">Design your academic journey, explore interdisciplinary learning, and embrace opportunities beyond the classroom.</p>
                        <p className="text-[#2050B1] mb-6">Discover how you can shape your future at AYRA.</p>
                        <button className="bg-[#7eb6ff] text-[#002561] font-semibold px-8 py-2 rounded-md text-lg hover:bg-[#5fa6f7] transition">Learn More</button>
                        <div className="relative w-full flex justify-center mt-2">
                            <svg width="220" height="32" viewBox="0 0 220 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="16" rx="110" ry="16" fill="url(#shadow-gradient)" fillOpacity="0.4" />
                                <defs>
                                    <linearGradient id="shadow-gradient" x1="0" y1="16" x2="220" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B3D0DF" />
                                        <stop offset="1" stopColor="#B3D0DF" stopOpacity="0.7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    {/* Right Card */}
                    <div className="flex flex-col items-center text-center px-8 py-10 bg-[#f7f8fa] h-full">
                        <Image src="/home/distinct-for-you.png" alt="Distinct For You" width={176} height={176} className="w-44 h-44 mx-auto mb-8 shadow-2xl rounded-none" />
                        <h2 className="text-4xl font-schabo text-[#002561] mb-4">DISTINCT FOR YOU</h2>
                        <p className="text-[#2050B1] mb-2">A university experience built around your goals, your passions, and your ambitions.</p>
                        <p className="text-[#2050B1] mb-6">See what makes AYRA stand apart.</p>
                        <button className="bg-[#7eb6ff] text-[#002561] font-semibold px-8 py-2 rounded-md text-lg hover:bg-[#5fa6f7] transition">Explore Now</button>
                        <div className="relative w-full flex justify-center mt-2">
                            <svg width="220" height="32" viewBox="0 0 220 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="16" rx="110" ry="16" fill="url(#shadow-gradient)" fillOpacity="0.4" />
                                <defs>
                                    <linearGradient id="shadow-gradient" x1="0" y1="16" x2="220" y2="16" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#B3D0DF" />
                                        <stop offset="1" stopColor="#B3D0DF" stopOpacity="0.7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionOpenCanvasDistinct; 