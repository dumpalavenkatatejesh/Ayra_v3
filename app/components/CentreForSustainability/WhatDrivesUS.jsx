"use client";
import React, { useState, useEffect } from "react";
import GridImages from "./GridImages";

export default function WhatDrivesUS() {
  const [isMobile, setIsMobile] = useState(false);

  const title = "WHAT DRIVES US";
  const subtext =
    "In alignment with UGC directives and the UN Sustainable Development Goals, we focus on advancing SDG 1 (No Poverty), SDG 4 (Quality Education), SDG 5 (Gender Equality), and SDG 8 (Decent Work & Economic Growth). These are not checkboxes—they’re cornerstones of the world we want to shape.";
  const title2 = "A CAMPUS THAT REFLECTS ITS COMMITMENTS";
  const subtext2 =
    "With the goal of becoming a certified Net Zero campus and working towards IGBC Platinum recognition, the Centre drives integration of sustainability into everyday operations—from infrastructure planning to behavioural shifts.";
  return (
    <>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 md:px-0 lg:flex justify-center items-center">
          <div className="md:w-[60%]">
            <h2 className="highlight-heading tracking-wider font-schabo text-[#002561]">
              {title}
            </h2>
          </div>
          <div className="md:w-[40%] pt-4">
            <p className="font-tthoves-light text-[#002561]">{subtext}</p>
          </div>
        </div>
        <div>
          <GridImages />
        </div>
        <div className="container mx-auto px-4 md:px-0 lg:flex justify-center items-center">
          <div className="md:w-[80%]">
            <h2 className="highlight-heading tracking-wider font-schabo text-[#002561]">
              {title2}
            </h2>
          </div>
          <div className="md:w-[40%] pt-4">
            <p className="font-tthoves-light text-[#000]">{subtext2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
