"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { HoverButton5 } from '@/app/utils/HoverButton';

const ExploreAyra = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's "sm" breakpoint
    };

    handleResize(); // Run initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageSrc = isMobile
    ? "/admissions/placements/learn_by_doing_mob.png"
    : "/admissions/placements/learn_by_doing.png";

  return (
    <div className="relative w-full md:h-[70vh] h-[100vh] container mx-auto md:my-10 my-0 bg-[#2050B2]">
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
          <div className="md:space-y-5 pb-10 md:pb-0">
            <p className=" font-light text-white font-tthoves-extralight">
              From internships at leading hotels and sports organisations to
              research assistantships and entrepreneurial projects, the Centre
              ensures that every AYRA student gains real experience before
              graduation.
            </p>
            <p className=" font-light text-white font-tthoves-extralight">
              We don’t just get you placement-ready. We help you discover what
              success means to you—and chart the path to get there.
            </p>
            {/* <div className="group inline-block">
                            <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Explore Clubs
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreAyra;
