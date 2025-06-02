"use client";

import Image from "next/image";
import React from "react";
import ApplicationProcess from "./ApplicationProcess";
const YourApplication = () => {
  return (
    <div className="border-t-2 border-dashed border-[#D0E3FF]">
      <div className="flex flex-col items-center justify-center container mx-auto border-l-2 border-r-2 border-dashed border-[#D0E3FF] p-5">
        <Image
          src="/admissions/apply-now/your-app.png"
          alt="yourApplication"
          width={1000}
          height={300}
          className="p-5"
        />
      </div>
      <div className="border-t-2  border-dashed border-[#D0E3FF]">
        <div className="container mx-auto p-5 border-l-2 border-r-2 border-dashed border-[#D0E3FF] flex items-center justify-center flex-col gap-5">
          <p className="text-center lg:w-2/3 pt-4">
            We believe your application should reflect who you are—not just
            what&apos;s on paper. This process is designed to get to know you as a
            whole person—your academics, interests, achievements, and
            aspirations.
          </p>
          <p className="text-center lg:w-2/3">
            Whether you&apos;ve excelled in the classroom, on the field, or through
            creative pursuits, we want to understand the full picture. From your
            past performance to your personal passions, every part of your
            application helps us see the unique perspective you bring to AYRA.
          </p>
          <p className="text-[#002561] font-tthoves-bold lg:text-3xl text-2xl text-center lg:w-2/3 pb-4">
            Just like your fingerprint, your story is one of a kind. And we&apos;re
            here to help you shape what comes next.
          </p>
        </div>
      </div>
      <div className="border-t-2 border-b-2 mb-10  border-dashed border-[#D0E3FF]">
        <div className="container mx-auto p-5 border-l-2 border-r-2 border-dashed border-[#D0E3FF] flex items-center justify-center flex-col gap-5">
          <p className="p-5 text-white font-tthoves-bold lg:text-3xl text-xl">
            <ApplicationProcess />
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourApplication;
