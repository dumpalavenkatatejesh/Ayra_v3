'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
        };

        // Initial check
        handleResize();

        // Listen for screen resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? '/admissions/placements/placements_mob_banner.png'
        : '/admissions/placements/placements_banner.png';

    return (
        <div className="relative w-full h-[90vh]">
            <Image
                src={imageSrc}
                alt="Placements Program Banner"
                fill
                className="object-cover object-center"
                priority
            />
        </div>
    );
};

export default Banner;
