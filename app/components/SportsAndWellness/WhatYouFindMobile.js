import Image from "next/image";
import React from "react";
import { WhatYouFindMobileData } from "../../utils/WhatYouFindMobileata/whatYouFindMobileata";

const WhatYouFindMobile = () => {
  return (
    <div className="bg-white lg:hidden">
      <div className="flex flex-col items-center justify-center container mx-auto">
        <Image
          src="/sports-and-wellness/find-here-mobile.svg"
          alt="yourApplication"
          width={800}
          height={300}
          className="px-10"
        />
      </div>
      <div className="lg:hidden p-5">
        <ul className="mt-4 space-y-3 text-gray-700">
          {WhatYouFindMobileData.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Image
                src={item.icon}
                alt="Bullet Icon"
                width={16}
                height={16}
                className="mt-1 rotate-[50deg]"
              />
              <span className="text-[#002561]">{item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatYouFindMobile;
