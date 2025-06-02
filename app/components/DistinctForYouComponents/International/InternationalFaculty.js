import Image from "next/image";
import React from "react";

const InternationalFaculty = () => {
  return (
    <div>
      <div className="py-5">
        <div className="mb-10">
          <div className="relative w-full container mx-auto my-4">
            {/* Background Image */}
            <div className="h-[500px] md:h-[600px] lg:h-[700px]">
              <Image
                src="/international/int-img-3.png"
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
            <div className="absolute lg:bottom-2 bottom-7 lg:left-[55%] left-[0%] flex items-center">
              <div className=" text-white px-5">
                <p className="lg:text-base text-sm px-4">
                  AYRA regularly hosts international experts, visiting scholars,
                  and guest faculty to enrich classroom discussions and bring
                  global expertise into every school. From masterclasses to
                  collaborative workshops. students benefit from a global
                  learning ecosystem-right here on campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalFaculty;
