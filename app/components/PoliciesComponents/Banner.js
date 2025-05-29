"use client";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url('/policies/policies-mobile-banner.png')] lg:bg-[url('/policies/policies-banner.png')] lg:h-[90vh] h-screen bg-cover bg-center text-white relative">
        {/* Rotated tagline in custom position */}
        <div className="absolute lg:bottom-[15%] bottom-56 lg:left-[13%] left-[20%] rotate-[-12deg]">
          <p className="text-base font-light opacity-90">
            Upholding Integrity. Enabling Impact.
          </p>
        </div>
        {/* Centered paragraph at bottom */}
        <div className="absolute lg:bottom-16 -bottom-0 text-center lg:px-4 lg:left-[55%] lg:p-0 p-4 transform ">
          <p className=" font-light text-start mx-auto opacity-90 lg:pe-10 text-xs lg:text-base">
            At AYRA, research is a cornerstone of our academic vision— a way to
            question deeply, explore responsibly, and contribute meaningfully to
            the world. Our research policies are designed to promote ethical,
            inclusive, and high-quality scholarship across disciplines.
          </p>
          <p className=" font-light text-start mx-auto opacity-90 lg:pe-10 pt-5 text-xs lg:text-base">
            Whether you’re a student initiating your first research project, a
            faculty member applying for external funding, or a collaborator
            working with AYRA, our research policies provide a clear,
            transparent, and accountable framework to support your work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
