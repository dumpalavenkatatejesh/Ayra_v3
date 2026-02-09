import Image from "next/image";
import React from "react";
import MobileLearning from "./MobileLearning";

const LearningJourney = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-0 ">
        <h2 className="highlight-heading tracking-wider font-schabo text-[#002561] text-left pb-5">
          THE CSD LEARNING <br /> STRUCTURE
        </h2>

        <div className="">
          <div className="flex justify-center items-center">
            <Image
              src="/csd/learning.png"
              width={600}
              height={600}
              priority
              alt="csd learning journey"
              className="object-cover py-10 hidden md:block"
            />
          </div>
        </div>
      </div>
      <MobileLearning />
    </div>
  );
};

export default LearningJourney;
