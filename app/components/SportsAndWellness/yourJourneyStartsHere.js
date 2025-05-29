import { HoverButton7 } from "@/app/utils/HoverButton";
import Image from "next/image";
import React from "react";

const yourJourneyStartsHere = () => {
  return (
    <div className="bg-[#2050B1] py-10">
      <div className="border-b border-dashed border-[#D0E3FF] mb-10">
        <div className="flex flex-col items-center justify-center container mx-auto p-5 mb-10">
          <Image
            src="/sports-and-wellness/your-journey.png"
            alt="Your Journey Starts Here"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col text-[#FFFFFF]">
        <p className="text-center lg:w-2/3 text-lg">
          Whether you’re a competitive athlete or looking to integrate fitness
          and well-being into your lifestyle, AYRA’s Sports & Wellness Centre
          provides an open canvas for growth, exploration, and performance.
        </p>
        <p className="text-xl font-bold text-center pt-3">
          Discover what’s possible at AYRA
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0">
          <button className="relative px-10 py-2 bg-white group-hover:bg-white text-[#2050B1] border border-dashed border-[#000] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Know more
          </button>
          <button className="relative px-10 py-2 bg-white group-hover:bg-white text-[#2050B1] border border-dashed border-[#000] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Learn More
          </button>
          <button className="relative px-10 py-2 bg-white group-hover:bg-white text-[#2050B1] border border-dashed border-[#000] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
            Explore Facilities
          </button>
        </div>
      </div>
    </div>
  );
};

export default yourJourneyStartsHere;
