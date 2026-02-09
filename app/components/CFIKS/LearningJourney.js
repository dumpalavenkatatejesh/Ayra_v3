import Image from "next/image";
import React from "react";

const LearningJourney = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-0 ">
        <h2 className="highlight-heading tracking-wider font-schabo text-[#002561] text-center pb-5">
          THE IKS LEARNING JOURNEY
        </h2>

        <div className="overflow-x-auto md:overflow-x-visible">
          <div className="min-w-[1208px]">
            <Image
              src="/cfiks/learning-journey.png"
              width={1208}
              height={674}
              priority
              alt="centre for research"
              className="object-cover w-full py-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningJourney;
