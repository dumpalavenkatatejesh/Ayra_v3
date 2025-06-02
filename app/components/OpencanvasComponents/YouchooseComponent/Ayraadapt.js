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
              src="/opencanvas/opc-img02-choose.jpg"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[25vh] w-full">
            <Image
              src="/opencanvas/opc-choose-footer.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden p-5"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-24 bottom-20 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <p className="lg:text-base text-sm px-4">
                At AYRA, your academic path isn’t predefined—it’s built by you.
                Whether you want to blend multiple disciplines, explore
                unconventional career paths, or specialise in an emerging field,
                you have the flexibility to create a curriculum that works for
                your goals.
              </p>

              <p className="lg:text-base text-sm px-4">
                This is your education. You choose how to shape it.
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




