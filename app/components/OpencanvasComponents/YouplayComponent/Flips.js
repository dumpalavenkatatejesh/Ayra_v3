
// "use client"
// import React, { useState } from "react"
// import Image from "next/image"

// const sectionsData = [
//   {
//     id: 1,
//     title:
//       "Through sports—Competing, training, and excelling in individual and team sports",
//     bgColor: "bg-gray-150",
//   },
//   {
//     id: 2,
//     title:
//       "Through leadership—Taking charge in student government, clubs, and social initiatives",
//     bgColor: "bg-[#F1F1F2]",
//   },
//   {
//     id: 3,
//     title:
//       "Through exploration—Trying out new activities, hobbies, and competitive challenges",
//     bgColor: "bg-gray-150",
//   },
// ]

// const FoldOnHoverRoll = () => {
//   const [hovered, setHovered] = useState(false)
//   const sectionWidth = 320
//   const panelHeight = "40vh"
//   const introText = "HOW DO YOU WANT TO CHALLENGE YOURSELF OUTSIDE ACADEMICS?"

//   return (
//     <>
//       <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 pb-5">
//         {/* Header */}
//         <div className="lg:w-[100vh] lg:h-[34vh] h-[15vh] lg:pt-20 pt-10 pb-10 container mx-auto">
//           <Image
//             src="/opencanvas/opc-img-text.png"
//             alt="Next Section"
//             width={1500}
//             height={1000}
//             className="container mx-auto"
//           />
//         </div>

//         {/* Desktop Horizontal Fold */}
//         <div className="mt-20 mb-20 sm:flex hidden flex-col justify-center items-center">
//           <p
//             className={`text-[#2050B1] font-semibold text-[25px] mb-4 font-tthoves-bold transition-all duration-500 ${
//               hovered
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-full"
//             }`}
//           >
//             {introText}
//           </p>

//           <div
//             className="relative"
//             onMouseEnter={() => setHovered(true)} // 🔁 Only setHovered(true)
//             style={{
//               perspective: "1500px",
//               width: `${sectionWidth * sectionsData.length}px`,
//               height: panelHeight,
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {sectionsData.map((section, index) => {
//               const isFirst = index === 0
//               const delay = hovered
//                 ? index * 0.2
//                 : (sectionsData.length - index - 1) * 0.2
//               const content = isFirst && !hovered ? "" : section.title

//               return (
//                 <div
//                   key={section.id}
//                   className={`absolute top-0 mt-6 shadow-lg ${section.bgColor}`}
//                   style={{
//                     width: `${sectionWidth}px`,
//                     height: panelHeight,
//                     left: `${index * sectionWidth}px`,
//                     transformOrigin: "left center",
//                     transform: hovered
//                       ? "rotateY(0deg)"
//                       : isFirst
//                       ? "rotateY(0deg)"
//                       : "rotateY(-90deg)",
//                     transition:
//                       "transform 0.7s ease-in-out, opacity 0.5s ease-in-out",
//                     transitionDelay: `${delay}s`,
//                     zIndex: sectionsData.length - index,
//                     backfaceVisibility: "hidden",
//                     opacity: hovered ? 1 : isFirst ? 1 : 0,
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div className="p-6 md:p-8 h-full flex flex-col justify-center">
//                     {content && (
//                       <h3
//                         className={`${
//                           isFirst && !hovered
//                             ? "text-[#2050B1]"
//                             : "text-black"
//                         } text-md md:text-md text-left break-words max-w-[280px]`}
//                       >
//                         {content}
//                       </h3>
//                     )}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Mobile Vertical Fold */}
//         <div className="sm:hidden flex flex-col justify-center items-center mt-10 mb-10">
//           <p
//             className={`text-[#2050B1] font-semibold text-[20px]  font-tthoves-bold transition-all duration-500 ${
//               hovered
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 -translate-y-full"
//             }`}
//           >
//             {introText}
//           </p>

//           <div
//             className="relative"
//             onMouseEnter={() => setHovered(true)} // 🔁 Only setHovered(true)
//             style={{
//               perspective: "1500px",
//               width: `${sectionWidth}px`,
//               height: `calc(${panelHeight} * ${sectionsData.length})`,
//               transformStyle: "preserve-3d",
//             }}
//           >
//             {sectionsData.map((section, index) => {
//               const isFirst = index === 0
//               const delay = hovered
//                 ? index * 0.2
//                 : (sectionsData.length - index - 1) * 0.2
//               const content = isFirst && !hovered ? "" : section.title

//               return (
//                 <div
//                   key={section.id}
//                   className={`absolute left-0 shadow-lg ${section.bgColor}`}
//                   style={{
//                     width: `${sectionWidth}px`,
//                     height: panelHeight,
//                     top: `calc(${index} * ${panelHeight})`,
//                     transformOrigin: "top center",
//                     transform: hovered
//                       ? "rotateX(0deg)"
//                       : isFirst
//                       ? "rotateX(0deg)"
//                       : "rotateX(-90deg)",
//                     transition:
//                       "transform 0.7s ease-in-out, opacity 0.5s ease-in-out",
//                     transitionDelay: `${delay}s`,
//                     zIndex: sectionsData.length - index,
//                     backfaceVisibility: "hidden",
//                     opacity: hovered ? 1 : isFirst ? 1 : 0,
//                     overflow: "hidden",
//                   }}
//                 >
//                   <div className="p-4 h-full flex flex-col justify-center">
//                     {content && (
//                       <h3
//                         className={`${
//                           isFirst && !hovered
//                             ? "text-[#2050B1]"
//                             : "text-black"
//                         } text-sm text-left break-words max-w-[260px]`}
//                       >
//                         {content}
//                       </h3>
//                     )}
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default FoldOnHoverRoll


"use client"
import React, { useState } from "react"
import Image from "next/image"

const sectionsData = [
  {
    id: 1,
    title:
      "Through sports—Competing, training, and excelling in individual and team sports",
    bgColor: "bg-gray-150",
  },
  {
    id: 2,
    title:
      "Through leadership—Taking charge in student government, clubs, and social initiatives",
    bgColor: "bg-[#F1F1F2]",
  },
  {
    id: 3,
    title:
      "Through exploration—Trying out new activities, hobbies, and competitive challenges",
    bgColor: "bg-gray-150",
  },
]

const FoldOnHoverRoll = () => {
  const [hovered, setHovered] = useState(false)
  const sectionWidth = 320
  const panelHeight = "40vh"
  const introText = "HOW DO YOU WANT TO CHALLENGE YOURSELF OUTSIDE ACADEMICS?"

  return (
    <>
      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 pb-5">
        {/* Header */}
        <div className="lg:w-[100vh] lg:h-[34vh] h-[15vh] lg:pt-20 pt-10 pb-10 container mx-auto">
          <Image
            src="/opencanvas/opc-img-text.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="container mx-auto"
          />
        </div>

        {/* Desktop Horizontal Fold */}
        <div className="mt-20 mb-20 sm:flex hidden flex-col justify-center items-center">
          <p
            className={`text-[#2050B1] font-semibold text-[25px] mb-4 font-tthoves-bold transition-all duration-500 ${
              hovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            }`}
          >
            {introText}
          </p>

          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            style={{
              perspective: "1500px",
              width: `${sectionWidth * sectionsData.length}px`,
              height: panelHeight,
              transformStyle: "preserve-3d",
            }}
          >
            {sectionsData.map((section, index) => {
              const isFirst = index === 0
              const delay = hovered
                ? index * 0.2
                : (sectionsData.length - index - 1) * 0.2
              const content = isFirst && !hovered ? "" : section.title

              return (
                <div
                  key={section.id}
                  className={`absolute top-0 mt-6 shadow-lg ${section.bgColor}`}
                  style={{
                    width: `${sectionWidth}px`,
                    height: panelHeight,
                    left: `${index * sectionWidth}px`,
                    transformOrigin: "left center",
                    transform: hovered
                      ? "rotateY(0deg)"
                      : isFirst
                      ? "rotateY(0deg)"
                      : "rotateY(-90deg)",
                    transition:
                      "transform 0.7s ease-in-out, opacity 0.5s ease-in-out",
                    transitionDelay: `${delay}s`,
                    zIndex: sectionsData.length - index,
                    backfaceVisibility: "hidden",
                    opacity: hovered ? 1 : isFirst ? 1 : 0,
                    overflow: "hidden",
                  }}
                >
                  <div className="p-6 md:p-8 h-full flex flex-col justify-center">
                    {content && (
                      <h3
                        className={`${
                          isFirst && !hovered
                            ? "text-[#2050B1]"
                            : "text-black"
                        } text-md md:text-md text-left break-words max-w-[280px]`}
                      >
                        {content}
                      </h3>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Vertical Fold (No Animations) */}
        <div className="sm:hidden flex flex-col justify-center items-center mt-10 mb-10">
          <p className="text-[#2050B1] font-semibold text-[20px] font-tthoves-bold mb-6 text-center">
            {introText}
          </p>

          <div className="flex flex-col gap-6">
            {sectionsData.map((section) => (
              <div
                key={section.id}
                className={`w-[${sectionWidth}px] ${section.bgColor} shadow-lg`}
                style={{
                  height: panelHeight,
                  overflow: "hidden",
                }}
              >
                <div className="p-4 h-full flex flex-col justify-center">
                  <h3 className="text-black text-sm text-left break-words max-w-[260px]">
                    {section.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default FoldOnHoverRoll
