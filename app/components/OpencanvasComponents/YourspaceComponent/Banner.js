"use client";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs";

const Banner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/opencanvas/Banner-Img-Space-01.png"
            alt="Bachelor Program Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/opencanvas/Banner-mobile-space-01.png"
            alt="Bachelor Program Mobile Banner"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Your Space", href: "/open-canvas/your-space" },
          ]}
        />
      </div>
    </>
  );
};

export default Banner;
