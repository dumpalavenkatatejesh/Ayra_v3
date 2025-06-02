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
              src="/opencanvas/opc-img-01.jpg"
              alt="Who Can Apply Background"
              fill
              className="object-cover lg:block hidden"
              priority
            />
          </div>
          <div className="lg:h-auto h-[35vh] w-full">
            <Image
              src="/opencanvas/opc-img-space-footer.png"
              alt="Who Can Apply Background"
              fill
              className="lg:hidden p-5"
              priority
            />
          </div>
          {/* Overlay Content */}
          <div className="absolute lg:bottom-24 bottom-7 lg:left-[55%] left-[0%] flex items-center">
            <div className=" text-white px-5">
              <p className="lg:text-base text-sm px-4">
                At AYRA, we know that no two students are the same. That’s why
                we don’t shape you—you shape your own experience. Whether you
                need a quiet space to think, a lively hub to discuss ideas, or
                hands-on opportunities to create and innovate, we provide an
                environment that adapts to your learning style.
              </p>

              <p className="lg:text-base text-sm px-4">
                Our classrooms, research spaces, and discussion areas are
                designed for collaboration, exploration, and growth, ensuring
                that you own your education in a way that’s meaningful to you.
                Here, you won’t just study—you’ll shape your future, one idea at
                a time.
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
