import Image from "next/image";
import React from "react";

const WhatYouFind = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#002561]">
          WHAT YOU&apos;LL <br className="hidden md:block" /> FIND HERE
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center container mx-auto lg:p-5">
        <Image
          src="/sports-and-wellness/find-here.png"
          alt="yourApplication"
          width={900}
          height={900}
          className="hidden lg:block"
        />
      </div>
    </div>
  );
};

export default WhatYouFind;
