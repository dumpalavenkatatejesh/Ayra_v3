import Image from "next/image";
import React from "react";
import MobileGlance from "./MobileGlance";

const Glance = () => {
  return (
    <div className="lg:py-10">
      <div className="container mx-auto px-4 md:px-0 ">
        <h2 className="highlight-heading tracking-wider font-schabo text-[#002561] text-center pb-5">
          CSD AT A GLANCE
        </h2>

        <div className="flex justify-center items-center">
          <Image
            src="/csd/glance.png"
            width={600}
            height={600}
            priority
            alt="csd at a glance"
            className="object-cover py-10 hidden md:block"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/csd/mobile-glance.svg"
            width={400}
            height={400}
            priority
            alt="csd at a glance"
            className="object-cover lg:hidden"
          />
        </div>
      </div>
      <MobileGlance />
    </div>
  );
};

export default Glance;
