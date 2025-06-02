

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
        ? '/opencanvas/Banner-mobile-pace-02.png'
        : '/opencanvas/Banner-Img-pace-02.png';

    return (
        <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#2050B2]">
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
