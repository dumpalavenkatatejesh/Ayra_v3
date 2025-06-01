'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        }; 

        // Initial check
        handleResize();

        // Listen to resize events
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageSrc = isMobile
        ? '/admissions/bachelors_programs/bachelor_mob_banner.png'
        : '/admissions/bachelors_programs/bachelor_banner.png';

    return (
        <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#2050B2]">

            <Image
                src={imageSrc}
                alt="Bachelor Program Banner"
                fill
                className="object-cover object-center"
                priority
            />
        </div>
    );
};

export default Banner;
