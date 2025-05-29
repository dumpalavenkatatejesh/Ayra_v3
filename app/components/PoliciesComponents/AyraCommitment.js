import Image from "next/image";
import React from "react";

const AyraCommitment = () => {
  return (
    <div className="bg-[#2050B1] py-10">
      <div className="border-b border-dashed border-[#D0E3FF] mb-10">
        <div className="flex flex-col items-center justify-center container mx-auto p-5 mb-10">
          <Image
            src="/policies/ayra-commitment.png"
            alt="Your Journey Starts Here"
            width={800}
            height={500}
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col text-[#FFFFFF] lg:p-0 p-4">
        <p className="text-center lg:w-2/3 text-lg">
          We see research not just as a means of knowledge generation, but as a
          tool for societal transformation. These policies ensure that research
          at AYRA is thoughtful, transparent, and transformative.
        </p>
        <p className="text-xl font-bold text-center pt-3">
          For questions, support, or to access policy documents:
        </p>
      </div>
    
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-5 sm:space-y-0">
          <button className="relative px-10 py-2 bg-white group-hover:bg-white text-[#2050B1] border border-dashed border-[#000] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
          View Full Research Policy Handbook
          </button>
          <button className="relative px-10 py-2 bg-white group-hover:bg-white text-[#2050B1] border border-dashed border-[#000] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
          Contact Centre for Research
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default AyraCommitment;
