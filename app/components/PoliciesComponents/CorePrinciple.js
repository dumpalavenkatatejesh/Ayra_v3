import { CorePrinciplesData } from "@/app/utils/AdmissionData/ApplicationData/ApplicationData";
import Image from "next/image";
import React from "react";

const CorePrinciple = () => {
  return (
   <div>
     <div className="flex container mx-auto lg:py-8 px-4 md:px-0 lg:px-20">
      <div className="flex flex-col container mx-aut0 py-8">
        <h2 className="text-4xl md:text-6xl py-5 tracking-wide text-[#2050B1] font-schabo leading-tight text-center md:text-left">
          CORE PRINCIPLES
        </h2>
        <p>Our research policies are built on five key principles:</p>
        <div className=" pb-10 pt-4">
          {CorePrinciplesData.map((item, index) => (
            <div key={index}>
              <ul className=""> 
                <li className="flex items-start gap-3 py-2">
                  <Image
                    src="/rocket-icon.svg"
                    alt="Bullet Icon"
                    width={16}
                    height={16}
                    className="mt-1 rotate-[50deg]"
                  />
                  <div className="flex lg:gap-1">
                  <div>
                  <span className="font-extrabold">{item.title}</span>
                  <span className="text-gray-700">{item.description}</span>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block w-1/2">
        <Image
          src="/policies/man-setting.svg"
          alt="Core Principles"
          width={500}
          height={500}
          className="p-10"
        />
      </div>
    </div>
   </div>
  );
};

export default CorePrinciple;
