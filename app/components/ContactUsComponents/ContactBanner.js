import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Image
          src="/contact-us/contact-hero-banner.png"
          alt="Contact Banner"
          layout="responsive"
          width={700}
          height={300}
        />
        
      </div>
      <div className="block lg:hidden">
      <Image
          src="/contact-us/contact-hero-mobile-banner.png"
          alt="Contact Banner"
          layout="responsive"
          width={700}
          height={300}
        />
      </div>
    </>
  );
};

export default ContactBanner;
