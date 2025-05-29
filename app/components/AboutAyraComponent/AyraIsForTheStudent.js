"use client"
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HoverButton5 } from '@/app/utils/HoverButton';

const AyraIsForTheStudent = () => {
    const slides = [
        "Wants to design their own path",
        "Believes learning should be expansive, not limiting",
        "Seeks a university experience that's personal, purposeful, and progressive"
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
        <div className='bg-[#2050B1] py-6 md:py-10 md:px-0 px-4'>
            {/* Text and first image container */}
            <div className="w-full flex flex-col items-center">
                <div className="relative w-full max-w-[900px] h-[120px] md:h-[200px]">
                    <Image
                        src="/admissions/about/ayra_is_for_the_student_who.png"
                        alt="merit-scholarship"
                        fill
                        className="object-contain mt-2 md:mt-4"
                        priority
                    />
                </div>
            </div>

            {/* Carousel Section */}
            <div className="text-white text-center flex flex-col items-center gap-4 md:gap-8 py-6 md:py-12">
                {/* Slide Text Container */}
                <div className="w-full max-w-6xl my-4 md:my-8">
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
                </div>

                <p className="text-lg md:text-2xl font-light max-w-3xl px-4 md:px-0">
                    AYRA's Bachelor's programs are built to give you the space, support, and structure to grow—intellectually, personally, and professionally.
                </p>
                <div className="w-full px-4 md:px-0">
                    {/* <HoverButton5 text="Learn More About AYRA Leadership" />     */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="border border-dashed border-gray-300 bg-white px-6 py-1 text-[#2050B1]">
                            Learn More About AYRA Leadership
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AyraIsForTheStudent

