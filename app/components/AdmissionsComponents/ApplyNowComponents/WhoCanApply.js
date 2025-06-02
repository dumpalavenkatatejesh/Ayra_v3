// import { HoverButton5 } from "@/app/utils/HoverButton";
import Image from "next/image";
import React from "react";

const WhoCanApply = () => {
  return (
    <div className="">
      <div className="border-b-2 border-dashed border-[#D0E3FF] mb-10">
        <div className="relative w-full container mx-auto my-4">
          {/* Background Image */}
          <div className="h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/admissions/apply-now/who-can-apply.png"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[50vh] w-full">
            <Image
              src="/admissions/apply-now/who-can-apply-mobile.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden p-5"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-10 bottom-0 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white p-10">
              <p className="border-b border-[#FFFFFF] border-dashed py-5 lg:text-base text-sm">
                AYRA welcomes students from diverse academic backgrounds who are
                driven, creative, and ready to explore new possibilities. We
                offer undergraduate, postgraduate, and specialised programs
                tailored to industry needs.
              </p>

              <h2 className="text-4xl md:text-6xl py-5 tracking-wide text-[#fff] font-schabo leading-tight text-center md:text-left">
                SCHOLARSHIPS
              </h2>
              <p className="lg:text-base text-sm">
                AYRA offers merit-based and need-based scholarships to support
                students in achieving their goals. Learn more about financial
                aid options.
              </p>
              {/* <div className="pt-5">
                <HoverButton5 text="Know more" />
              </div> */}
              <div>
                <button className="relative text-white px-5 py-1 w-36 bg-[#66A4F9] transition-all cursor-pointer group hover:shadow-inner border-dashed">
                  Know more
                  <span className="absolute top-0 right-0 w-0 h-0 border-solid border-transparent group-hover:border-r-[15px] group-hover:border-b-[15px] transition-all duration-75 ease-out border-r-[#012461] border-b-[#3B76CB]"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* NEED HELP? */}
        <div className="container mx-auto p-5 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-6xl py-5 tracking-wide text-[#000] font-schabo leading-tight text-center md:text-left">
            NEED HELP?
          </h2>
          <p className="text-[#2050B1] lg:text-3xl text-xl font-tthoves-bold">
            Our admissions team is here to assist you.
          </p>
          <p className="text-[#002561] text-md">
            Contact us for guidance on the application process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoCanApply;
