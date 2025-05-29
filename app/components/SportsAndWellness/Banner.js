"use client";
import React from "react";

const Banner = () => {
  return (
    <div className="lg:bg-[url('/sports-and-wellness/sports-banner.png')] bg-[url('/sports-and-wellness/mobile-sports-banner.png')] h-[90vh] bg-cover bg-center text-white relative">
      {/* Centered paragraph at bottom */}
      <div className="absolute lg:bottom-16 bottom-0 text-center lg:px-4 lg:left-[49%] lg:p-0 p-4 transform">
        <p className="text-base font-light text-start mx-auto opacity-90 lg:pe-10">
          At AYRA, we believe in nurturing both mind and body. The Sports &
          Wellness Centre is designed to support student-athletes, fitness
          enthusiasts, and everyone seeking a holistic approach to personal
          development.
        </p>
        <p className="text-base font-light text-start mx-auto opacity-90 lg:pe-10 pt-5">
          Whether you’re pursuing a career in sports or just want to stay active
          and centred, this space is built for you. With world-class facilities,
          certified trainers, and wellness experts, AYRA offers a supportive
          ecosystem that encourages peak performance, mental health, and
          balanced living.
        </p>
      </div>
    </div>
  );
};

export default Banner;
