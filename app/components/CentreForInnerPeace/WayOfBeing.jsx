"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WayOfBeing() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-0 lg:flex justify-center items-center">
          <div className="md:w-[60%]">
            <h2 className="highlight-heading tracking-wider font-schabo text-[#002561]">
              A WAY OF BEING, NOT <br className="hidden md:block" /> JUST A
              COURSE
            </h2>
          </div>
          <div className="md:w-[40%] pt-4">
            <p className="font-tthoves-light">
              This is not a single course tucked away on a timetable. It is a
              practice embedded across programmes, encouraging students to align
              with their deeper selves even as they pursue technical or
              professional paths. Participation in the Centre’s offerings will
              be credit-bearing, reinforcing its value within the academic
              ecosystem.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
