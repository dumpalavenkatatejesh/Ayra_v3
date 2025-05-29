"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[url('/admissions/apply-now/apply-now-mobile-banner.png')] lg:bg-[url('/admissions/apply-now/apply-now-banner.png')] h-screen lg:h-[90vh] bg-cover bg-center text-white relative">
      {/* Centered paragraph at bottom */}
      <div className="absolute lg:bottom-16 bottom-0 text-center lg:px-4 lg:left-[49%] lg:p-0 p-4 transform">
        <p className="text-xs lg:text-base font-light text-start mx-auto opacity-90 lg:pe-10">
          In today&apos;s world, where change is the only constant, students
          prioritise holistic education that prepares them for whatever
          opportunity or challenge that comes their way.
        </p>
        <p className="text-xs lg:text-base font-light text-start mx-auto opacity-90 lg:pe-10">
          At AYRA, we understand this. AYRA is more than a university. It&apos;s an
          open canvas—a space where you&apos;re encouraged to explore freely, think
          boldly, and grow intentionally. Here, you&apos;re supported and challenged
          in equal measure. We&apos;ll push you to reach higher while giving you the
          room to discover and embrace what truly drives you.
        </p>
      </div>
    </div>
  );
};

export default Banner;
