'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HoverButton5 } from '@/app/utils/HoverButton';


const ExploreAyra = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
        };

        handleResize(); // Run initially
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? '/admissions/placements/learn_by_doing_mob.png'
        : '/admissions/placements/learn_by_doing.png';

    return (
        <div className="relative w-full h-[90vh] container mx-auto my-10 ">
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt="Leadership & Entrepreneurship Clubs"
                fill
                className="object-cover object-center"
                priority
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 top-48 md:right-50 right-10 flex justify-end md:items-center items-end p-4">
                <div className="text-white md:max-w-[30%] w-full">
                    <div className="md:space-y-5">
                        <p className="text-sm font-light text-white font-tthoves-extralight">
                            AYRA was founded with a bold vision: to be an open canvas where curiosity meets possibility.
                            At AYRA, we don't just prepare — we empower them to shape it.
                        </p>
                        <p className="text-sm font-light text-white font-tthoves-extralight">
                            We believe that education must be as dynamic as the world our students will enter.
                            That's why we've designed a university experience that blends academic rigour with
                            creative exploration, personal growth with global relevance, and tradition with bold,
                            future-facing thinking.
                        </p>
                        <div className="group inline-block">
                            <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Explore Clubs
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreAyra
