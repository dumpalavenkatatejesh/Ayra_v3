import Image from "next/image";
import React from "react";

const WhatYouFind = () => {
  return (
    <div className="border-b-2 border-dashed border-[#A9B8D5] mb-10">
      <div className="flex flex-col items-center justify-center container mx-auto border-l-2 border-r-2 border-dashed border-[#A9B8D5] p-5">
        <Image
          src="/sports-and-wellness/what-youl-find-here.png"
          alt="yourApplication"
          width={500}
          height={300}
          className="p-5"
        />
      </div>
    </div>
  );
};

export default WhatYouFind;
