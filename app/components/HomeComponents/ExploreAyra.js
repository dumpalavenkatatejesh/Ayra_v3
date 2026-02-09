'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { HoverButton5 } from '@/app/utils/HoverButton';

const ExploreAyra = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const points = [
        "Bachelor’s and Master’s",
        "Flexible Academic Pathways",
        "Built-in Internships and Career Support",
        "A Campus Designed for Innovation and Wellbeing"
    ];

    return (
        <div className="relative w-full h-[90vh] container mx-auto my-10">
            {/* Background Image with conditional src */}
            <Image
                src={
                    isMobile
                        ? '/home/new/explore_ayra_mob_banner.png'
                        : '/home/new/explore_ayra_banner.jpg'
                }
                alt="Explore AYRA Banner"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Content overlay (same for now, can be adjusted too) */}
            <div className="absolute inset-0 top-48 md:right-50 right-10 flex justify-end md:items-center items-end p-4">
                <div className="text-white md:max-w-[35%] w-full md:space-y-3 space-y-2 mb-5 md:mb-0">
                    {/* Previous Code - Inline CSS */}
                    {/* <h3 className="md:text-3xl text-2xl font-tthoves-demibold">Designed for a Changing World</h3> */}
                    {/* <p className="md:text-lg text-sm font-light font-tthoves-extralight">
                        AYRA is built for this moment—and for what comes next.
                    </p> */}

                    {/* New Code - Following globals.css typography (h3 for SEO) */}
                    <h2 className="sub-heading font-tthoves-demibold">Designed for a Changing World</h2>
                    <p className="font-tthoves-extralight">
                        AYRA is built for this moment—and for what comes next.
                    </p>
                    <ul className="md:space-y-3 md:mb-5">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start md:gap-3 gap-2">
                                <Image
                                    src="/rocket-icon.svg"
                                    alt="Bullet Icon"
                                    width={16}
                                    height={16}
                                    className="mt-1 rotate-[50deg]"
                                />
                                {/* Previous Code - Inline CSS */}
                                {/* <span className='md:text-lg text-sm font-light font-tthoves-extralight'>{point}</span> */}

                                {/* New Code - Following globals.css typography */}
                                <span className='font-tthoves-extralight'>{point}</span>
                            </li>
                        ))}
                    </ul>
                    {/* <div className="group inline-block">
                        <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                            Discover Our Schools
                            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default ExploreAyra;
