// 'use client';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const Banner = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 640);
//         };

//         // Initial check
//         handleResize();

//         // Listen to resize events
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const imageSrc = isMobile
//         ? '/opencanvas/Banner-mobile-Play-04.png'
//         : '/opencanvas/Banner-Img-Play-04.png';

//     return (
//         <div className="relative w-full h-[100vh] md:h-[90vh] bg-[#2050B2]">
//             <Image
//                 src={imageSrc}
//                 alt="Bachelor Program Banner"
//                 fill
//                 className="px-4"
//                 priority
//             />
//         </div>
//     );
// };

// export default Banner;

"use client";
import Image from "next/image";
import React from "react";
import Breadcrumbs from "../../../utils/Breadcrumbs";

const Banner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/opencanvas/Banner-Img-Play-04.png"
            alt="Bachelor Program Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full lg:h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/opencanvas/Banner-mobile-Play-04.png"
            alt="Bachelor Program Mobile Banner"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-0">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "You Play", href: "/open-canvas/your-play" },
          ]}
        />
      </div>
    </>
  );
};

export default Banner;
