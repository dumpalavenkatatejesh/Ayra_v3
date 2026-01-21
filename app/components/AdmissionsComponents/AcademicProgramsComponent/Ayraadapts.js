
import Image from "next/image";
import React from "react";

const Ayraadapt = () => {
  return (
    <div className="">
      <div className="mb-10">
        <div className="relative w-full container mx-auto my-4">
          {/* Background Image */}
          <div className="h-[500px] md:h-[600px] lg:h-[700px]">
            <Image
              src="/opencanvas/opc-img02-pace.jpg"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full">
            <Image
              src="/opencanvas/opc-pace-footer.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden object-cover bg-[#002560]"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-24 bottom-8 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <p className="lg:text-base text-sm px-4">
              At AYRA, your program does not define you. You define how your program unfolds.
              </p>
              <p className="lg:text-base text-sm px-4">
              You are encouraged to explore across disciplines, shape your learning journey, and evolve as your interests and direction grow. AYRA adapts to your program offering structure where you need it, space where you want it, and support throughout your journey.
             </p>

              <p className="lg:text-base text-sm px-4">
              This is not about choosing once and staying fixed. This is about taking the first step and unfolding into what you can become.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayraadapt;
