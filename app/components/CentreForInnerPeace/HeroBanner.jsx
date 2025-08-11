import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../utils/Breadcrumbs";

const HeroBanner = () => {
  return (
    <>
      <div className="mx-auto">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Centre for Inner peace",
              href: "/centres-for-excellence/centre-for-inner-peace",
            },
          ]}
        />
      </div>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/centre-for-inner-peace/banner-new.png"
            alt="Centre For Inner Peace"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/centre-for-inner-peace/mobile-banner-002.png"
            alt="Centre For Research"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
