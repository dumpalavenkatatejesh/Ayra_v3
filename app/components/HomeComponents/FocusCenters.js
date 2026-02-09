import Image from "next/image";
import React from "react";
import { focusCentersData } from "../../utils/HomeData";

const FocusCenters = () => {
  return (
    <>
      <div
        className="w-full my-10 border-none md:border-t-2 md:border-dashed"
        style={{ borderColor: "#A9B8D5" }}
      >
        <div className="container mx-auto p-4 lg:p-0">
          <div className="flex flex-col md:flex-row lg:gap-8 gap-4">
            {/* Left Side */}
            <div className="md:w-1/2 md:pr-8 relative lg:py-10">
              {/* Previous Code - Inline CSS (h4 - not ideal for SEO) */}
              {/* <h4 className="font-schabo text-[80px] text-[#002561]">
                FOCUS CENTRES
              </h4> */}
              {/* <p className="font-tthoves-demibold text-[24px] leading-tight">
                Learning That Moves <br /> Beyond Classrooms
              </p> */}

              {/* New Code - Following globals.css typography (h2 for SEO - main section) */}
              <h2 className="font-schabo text-[#002561]">
                FOCUS CENTRES
              </h2>
              {/* h3 for sub-heading - SEO friendly */}
              <h3 className="font-tthoves-demibold">
                Learning That Moves <br /> Beyond Classrooms
              </h3>
              {/* Center Dotted Divider for md+ screens */}
              <div
                className="hidden md:block absolute top-0 right-0 h-full w-0.5"
                style={{ borderRight: "2px dashed #A9B8D5" }}
              ></div>
            </div>
            {/* Right Side */}
            <div className="md:w-1/2 lg:py-10">
              {/* Previous Code - Inline CSS */}
              {/* <p className="text-[20px] font-tthoves-medium leading-tight">
                From entrepreneurship to wellness, AYRA&apos;s Focus Centres
                help you develop skills for life, not just for work.
              </p> */}

              {/* New Code - Following globals.css typography */}
              <p className="font-tthoves-medium">
                From entrepreneurship to wellness, AYRA&apos;s Focus Centres
                help you develop skills for life, not just for work.
              </p>
              <div>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {focusCentersData.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Image
                        src={item.icon}
                        alt="Bullet Icon"
                        width={16}
                        height={16}
                        className="mt-1 rotate-[50deg]"
                      />
                      <span className="text-[#002561]">{item.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4 lg:p-0">
          <Image
            src="/home/focus-centers.png"
            alt="focus centers"
            className="w-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default FocusCenters;
