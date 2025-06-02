
import Image from "next/image";
import React from "react";

const Ayraadapt = () => {
  return (
    <div className="py-5">
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
          <div className="absolute lg:bottom-24 bottom-20 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <p className="lg:text-base text-sm px-4">
              Learning at AYRA is designed to be as dynamic as you are. Whether
            you want to fast-track your degree, earn industry certifications, or
            take the time to explore multiple disciplines, your journey is yours
            to shape. With multiple exit points, entrepreneurial incubators, and
            experiential learning opportunities, we ensure that education adapts
            to you, not the other way around.
              </p>

              <p className="lg:text-base text-sm px-4">
              This is your education. At your pace. In your way.
              </p>
              {/* <div className="pt-5">
                <HoverButton5 text="Know more" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ayraadapt;
