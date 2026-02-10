"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Grounded() {
  const [isMobile, setIsMobile] = useState(false);

  const title = "GROUNDED IN PURPOSE";
  const subtext =
    "From supporting local businesses and vendors to working alongside CSOs and government departments, the Centre’s work is rooted in the idea that inclusive progress comes from collaboration, not just outreach.";
  const title2 = "WHERE LEARNING MEETS LISTENING";
  const subtext2 =
    "Through immersive programs and co-designed initiatives, students and faculty are invited to move beyond the classroom—understanding lived experiences, co-creating solutions, and building empathy-driven leadership. This is not just service-learning. It’s participatory change.";
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
            <p className="font-tthoves-light text-[#000]">{subtext}</p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-0">
          <Image
            src="/centre-for-community-engagement/grounded.png"
            alt="Grounded"
            width={1000}
            height={1000}
            className="w-full h-full object-cover py-10"
          />
        </div>
        <div className="container mx-auto px-4 md:px-0 lg:flex justify-center items-center">
          <div className="md:w-[50%]">
            <h2 className="highlight-heading tracking-wider font-schabo text-[#002561]">
              {title2}
            </h2>
          </div>
          <div className="md:w-[50%] pt-4">
            <p className="font-tthoves-light text-[#000]">{subtext2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
