import Image from "next/image";
import React from "react";
import { workSpansData } from "../../utils/WorkSpansData/workSpansData";

const PathWays = () => {
  return (
    <>
      <div className="bg-white lg:py-20 pb-10">
        <div className="container mx-auto px-4 md:px-0">
          {/* for desktop */}
          <div className="flex justify-center items-center">
            <div className="hidden lg:block">
              <Image
                src="/centre-for-sustainability/work-spans.png"
                alt="Path Ways"
                width={1000}
                height={1000}
              />
            </div>
          </div>
          {/* for mobile */}
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
              <h4 className="text-3xl font-bold lg:hidden text-[#2050B1] font-tthoves-bold pb-5">
                Our Work Spans
              </h4>
            </div>
            <div className="lg:hidden">
              <Image
                src="/centre-for-sustainability/work-span-mobile.svg"
                alt="Path Ways"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
            <div className="lg:hidden">
              <div>
                <ul className="mt-4 space-y-3 text-gray-700">
                  {workSpansData.map((item, index) => (
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
      </div>
    </>
  );
};

export default PathWays;
