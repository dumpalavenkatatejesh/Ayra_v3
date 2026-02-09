import Image from "next/image";
import React from "react";
import MobilePillars from "./MobilePillars";

const Pillars = () => {
  return (
    <div className="lg:py-10">
      <div className="container mx-auto px-4 md:px-0 ">
        <h2 className="highlight-heading tracking-wider font-schabo text-[#002561] text-center pb-5">
          THE PILLARS OF IKS AT AYRA
        </h2>

        <div className="">
          <Image
            src="/cfiks/pillars.png"
            width={1208}
            height={674}
            priority
            alt="pillars of iks at ayra"
            className="object-cover w-full py-10 hidden md:block"
          />
        </div>
      </div>
      <MobilePillars />
    </div>
  );
};

export default Pillars;
