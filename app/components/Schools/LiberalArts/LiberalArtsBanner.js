// import React from "react"
// const LiberalArtsBanner = () => {
//   return (
//     <div className="relative h-[110vh] md:h-[90vh] w-full">
//       {/* Background Image Responsive */}
//       <div className="absolute inset-0 bg-center bg-cover
//                       md:bg-[url('/schools/liberal-arts/liberal-arts-banner.png')]
//                       bg-[url('/schools/liberal-arts/arts-mobile.png')]">

//         {/* Text Container using Flexbox */}
//         <div className="absolute inset-0 flex items-end justify-end
//                         px-4 sm:px-6 md:px-10 lg:px-16
//                         pb-16 sm:pb-20 md:pb-28 lg:pb-36">

//           <div className="max-w-md sm:max-w-lg md:max-w-2xl">
//             <p className="text-white text-xs sm:text-sm md:text-base md:rotate-[-12deg] font-tthoves-light">
//               Our programs are designed to help you think critically,
//               communicate effectively, and engage with ideas across disciplines.
//               Whether your interest lies in psychology, media, performance, or
//               economics, you’ll find the space here to experiment, specialise,
//               and shape a path that’s uniquely your own.
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default LiberalArtsBanner

import React from "react"

const Banner = () => {
  return (
    <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
      <div className="absolute inset-0 bg-cover  md:bg-[url('/schools/liberal-arts/liberal-arts-banner.png')] bg-[url('/schools/liberal-arts/arts-mobile.png')]"></div>
    </div>
  )
}

export default Banner
