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
        ? '/opencanvas/Banner-mobile-space-01.png'
        : '/opencanvas/Banner-Img-Space-01.png';

    return (
        <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#012461]">
            <Image
                src={imageSrc}
                alt="Bachelor Program Banner"
                fill
                className="px-4"
                priority
            />
        </div>
    );
};

export default Banner;
