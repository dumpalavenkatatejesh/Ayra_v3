"use client";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../utils/Breadcrumbs";

const ContactBanner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/contact-us/contact-hero-banner.png"
            alt="Contact Banner Desktop"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/contact-us/contact-hero-mobile-banner.png"
            alt="Contact Banner Mobile"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="px-5 lg:px-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Us", href: "/contact-us" },
          ]}
        />
      </div>
    </>
  );
};

export default ContactBanner;
