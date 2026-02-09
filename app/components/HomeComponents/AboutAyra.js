import Image from 'next/image';
import React from 'react';

const AboutAyra = () => {
    return (
        <div className="w-full py-16 bg-[#002561] lg:px-0 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left Side */}
                <div className="flex flex-col items-start justify-center gap-6 w-full md:basis-[65%]">
                    <Image src="/home/home-about-ayra.png" alt="About Ayra" width={500} height={500} className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg mb-4" />
                    
                    {/* Previous Code - Inline CSS */}
                    {/* <h2 className="text-white text-3xl font-bold font-tthoves-medium">
                        WHERE POTENTIAL MEETS POSSIBILITY
                    </h2> */}
                    {/* <p className="text-white max-w-xl">
                        <span className='font-tthoves-extralight'> Education is more than acquiring knowledge—it&apos;s about</span> unlocking potential, fostering creativity, and preparing you for the future.
                    </p> */}

                    {/* New Code - Following globals.css typography */}
                    <h2 className="sub-heading text-white font-tthoves-medium">
                        WHERE POTENTIAL MEETS POSSIBILITY
                    </h2>
                    <p className="text-white max-w-xl">
                        <span className='font-tthoves-extralight'>Education is more than acquiring knowledge—it&apos;s about</span> unlocking potential, fostering creativity, and preparing you for the future.
                    </p>
                </div>
                {/* Right Side */}
                <div className="flex flex-col items-center md:items-end justify-center gap-6 w-full md:basis-[35%]">
                    <Image src="/home/potential-meet-image.png" alt="Potential Meet" width={500} height={500} className="w-full max-w-xs md:max-w-sm" />
                </div>
            </div>
        </div>
    );
};

export default AboutAyra; 