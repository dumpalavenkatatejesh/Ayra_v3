import React from "react";
import Image from "next/image";
const FutureOfEducation = () => {
  return (
    <>
      <div className="container mx-auto md:pt-8 md:pb-10 pt-0">
        {/* Flex items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="z-10 md:px-0 px-4 md:mb-0">
            <h2 className="highlight-heading tracking-wide text-[#002561] font-schabo leading-tight text-center md:text-left">
              REIMAGINING THE <br /> FUTURE OF EDUCATION
            </h2>
          </div>

          <div className="px-4 md:px-0 md:mt-0 mt-[-30px]">
            <p className="font-tthoves-light">
              Higher education is undergoing a transformation across the
              world—and India is no exception. With the adoption of the National
              Education Policy (NEP) 2020, there is an urgent need to evolve how
              we teach, how we learn, and how we prepare learners for a world in
              constant motion.
            </p>
            <p className="mt-3 font-tthoves-light">
              At AYRA, we see this not as a challenge—but as an opportunity to
              lead with intention. That’s where the Centre for Teaching &
              Learning (CTL) comes in.
            </p>
          </div>
        </div>

        {/* Image aligned with content above */}
        <div className="mt-4 ">
          <Image
            src="/teaching-and-learning/img1.png"
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

export default FutureOfEducation;
