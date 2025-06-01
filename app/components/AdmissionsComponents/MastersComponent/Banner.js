'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
        };

        // Run on initial load
        handleResize();

        // Listen for window resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? '/admissions/masters_programs/master_mob_banner.png'
        : '/admissions/masters_programs/masters_banner.png';

    return (
        <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#2050B2]">

            <Image
                src={imageSrc}
                alt="Masters Program Banner"
                fill
                className="object-cover object-center"
                priority
            />
        </div>
    );
};

export default Banner;
