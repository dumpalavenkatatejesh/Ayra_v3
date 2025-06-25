'use client';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full bg-[#2050B2] lg:pt-[5.6%] pt-20">
            {/* Desktop Image */}
            <div className="hidden md:block w-full">
                <Image
                    src="/home/new/new_home_banner.png"
                    alt="Bachelor Program Desktop Banner"
                    width={1920}
                    height={1080}
                    className="object-cover object-center w-full lg:h-[90vh]"
                    priority
                />
            </div>

            {/* Mobile Image */}
            <div className="block md:hidden w-full">
                <Image
                    src="/home/new/home-page-mobile-new.png"
                    alt="Bachelor Program Mobile Banner"
                    width={800}
                    height={1000} // adjust as per your actual image ratio
                    className="object-cover object-center w-full h-auto"
                    priority
                />
            </div>
        </div>
    );
};

export default Banner;
