import React from "react";
import Image from "next/image";
const Facilities = () => {
  return (
    <>
      <div className="container mx-auto md:pt-8 md:pb-10 pt-5">
        {/* Flex items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="z-10 md:px-0 px-4 md:mb-0">
            <h2 className="highlight-heading tracking-wide text-[#002561] font-schabo leading-tight text-center md:text-left">
              OUR FACILITIES
            </h2>
          </div>

          <div className="px-4 md:px-0 md:mt-0 mt-[-30px]">
            <p className="font-tthoves-light">
              The Centre is staffed with a part-time physician, a full-time
              nurse, and a medical attendant. It houses primary care equipment,
              an infirmary ward, and coordinates ambulance services for
              emergencies.
            </p>
          </div>
        </div>

        {/* Image aligned with content above */}
        <div className="mt-4 ">
          <Image
            src="/cfh/science.png"
            alt="Center for Teaching and Learning"
            width={1200}
            height={600}
            className="w-full"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Facilities;
