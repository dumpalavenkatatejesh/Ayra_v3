"use client"
import Image from "next/image"

import React, { useState } from "react"
import { RiArrowRightUpFill } from "react-icons/ri"
import { sectionsData } from "@/app/utils/FlipData"


const FoldOnHoverRoll = () => {
  const [hovered, setHovered] = useState(false)
  const sectionWidth = 330
  const height = "55vh"

  return (
    <>
      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 py-10">
        <div className=" lg:w-[100vh] lg:h-[40vh] pt-10 pb-10 container mx-auto">
          <Image
            src="/opencanvas/opc-choose-img-text.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="  container mx-auto "
          />
        </div>

        <div
          className="relative mt-10 mb-10 container mx-auto"
          onMouseEnter={() => setHovered(true)}
          style={{
            perspective: "1500px",
            height,
            width: `${sectionWidth * sectionsData.length}px`,
          }}
        >
          {sectionsData.map((section, index) => {
            const isFirst = index === 0
            const delay = hovered
              ? index * 0.3
              : (sectionsData.length - index - 1) * 0.3

            return (
              <div
                key={index}
                className={`absolute top-0 transition-all duration-700 ease-in-out shadow-md p-5 ${section.bgColor} flex flex-col`}
                style={{
                  width: `${sectionWidth}px`,
                  height,
                  left: `${index * sectionWidth}px`,
                  transformOrigin: "left center",
                  transform:
                    isFirst || hovered ? "rotateY(0deg)" : "rotateY(-90deg)",
                  transitionDelay: `${delay}s`,
                  zIndex: sectionsData.length - index,
                  backfaceVisibility: "hidden",
                  opacity: isFirst || hovered ? 1 : 0,
                }}
              >
                {/* Heading with fixed height */}
                <div className="h-[28%] w-full flex items-center justify-center">
                  <h3 className="font-extrabold text-[#2050B1] text-[24px] text-left font-tthoves-demibold">
                    {section.title}
                  </h3>
                </div>

                {/* Content with remaining height */}
                <div className="h-[72%] overflow-y-auto mt-4">
                  <ul className="space-y-2">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-800 text-md"
                      >
                        <RiArrowRightUpFill className="text-blue-800 mt-1 w-10" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default FoldOnHoverRoll
