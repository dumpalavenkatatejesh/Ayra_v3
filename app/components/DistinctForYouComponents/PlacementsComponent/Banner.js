'use client';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[90vh]">
            <Image
                src="/admissions/placements/placements_banner.png"
                alt="Bachelor Program Banner"
                fill
                className="object-cover object-center"
                priority
            />
        </div>
    );
};

export default Banner;
