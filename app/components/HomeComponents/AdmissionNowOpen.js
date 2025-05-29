"use client";

import { HoverButton5 } from '@/app/utils/HoverButton';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdmissionNowOpen = () => {
    const slides = [
        'Scholarships Available',
        'No-Cost Early Application'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };
    return (
        <div className="w-full text-white text-center flex flex-col items-center gap-4 md:gap-8 py-6 md:py-12 bg-[#002562] lg:p-0 p-4">
            {/* Slide Text Container */}
            <div className="container my-4 md:my-8 flex flex-col gap-6">

                <div className='flex flex-col justify-center items-center'>
                    <Image src="/home/admissions-now-open.png" alt='admissions now open' width={700} height={100} />
                </div>
                <div>
                    <p className='font-tthoves-medium text-3xl'>
                        Apply. Personalise. Begin.
                    </p>
                    <p>
                        Admissions are now open for Bachelor’s and Master’s programs. <br /> Apply online or connect with our admissions team to explore what AYRA can offer you.
                    </p>
                </div>
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="flex items-center justify-center px-2 md:px-4">
                            <div className="relative w-[25px] h-[25px] md:w-[40px] md:h-[40px] inline-flex items-center">
                                <Image
                                    src="/rocket-icon.svg"
                                    alt="rocket icon"
                                    fill
                                    className="object-contain rotate-[50deg]"
                                />
                            </div>
                            <span className="text-2xl md:text-5xl font-light ml-1">
                                {slide}
                            </span>
                        </div>
                    ))}
                </Slider>


                <div className="w-full px-4 md:px-0 flex lg:flex-row flex-col gap-10 justify-center">
                    <div className="group inline-block">
                        <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                            Start Your Application
                            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002562] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </button>
                    </div>
                    <div className="group inline-block">
                        <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                            Contact Admissions
                            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002562] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmissionNowOpen
