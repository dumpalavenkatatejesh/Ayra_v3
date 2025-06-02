// you choose

"use client"
import React, { useState } from "react"
import Image from "next/image"
import { sectionsData } from "../../../utils/FlipData"

const FoldOnHoverRoll = () => {
  const [opened, setOpened] = useState(false)
  const sectionWidth = 350
  const desktopSectionHeight = "50vh"
  const mobileSectionHeight = 270 // Increased height for mobile

  return (
    <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 lg:py-20 py-6">
      <div className="lg:w-[100vh] lg:h-[34vh] h-[15vh] lg:pt-10 pb-10 container mx-auto">
        <Image
          src="/opencanvas/opc-choose-img-text.png"
          alt="Next Section"
          width={1500}
          height={1000}
          className="container mx-auto"
        />
      </div>

      {/* DESKTOP */}
      <div
        className="relative container mx-auto hidden lg:flex mb-5"
        onMouseEnter={() => {
          if (!opened) {
            setOpened(true)
          }
        }}
        style={{
          perspective: "1500px",
          height: desktopSectionHeight,
          width: `${sectionWidth * sectionsData.length}px`,
        }}
      >
        {sectionsData.map((section, index) => {
          const isFirst = index === 0
          const delay = opened
            ? index * 0.3
            : (sectionsData.length - index - 1) * 0.3

          return (
            <div
              key={index}
              className={`absolute top-0 transition-all duration-700 ease-in-out shadow-md p-4 ${section.bgColor} flex flex-col justify-between`}
              style={{
                width: `${sectionWidth}px`,
                height: desktopSectionHeight,
                left: `${index * sectionWidth}px`,
                transformOrigin: "left center",
                transform:
                  isFirst || opened ? "rotateY(0deg)" : "rotateY(-90deg)",
                transitionDelay: `${delay}s`,
                zIndex: sectionsData.length - index,
                backfaceVisibility: "hidden",
                opacity: isFirst || opened ? 1 : 0,
              }}
            >
              <div className="w-full flex items-center px-2">
                <h3 className="font-extrabold text-[#2050B1] text-[20px] font-tthoves-demibold text-left leading-tight">
                  {section.title}
                </h3>
              </div>
              <div className="h-[70%] overflow-y-auto mt-2 pr-1 space-y-4">
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-800 text-md"
                    >
                      <Image
                        src="/rocket-icon.svg"
                        width={20}
                        height={16}
                        className="w-5 h-4 rotate-45 mt-1.5 shrink-0"
                        alt="rocket-logo"
                      />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* MOBILE - Vertical Fold with reduced heading-to-list space */}
      <div
        className="relative container mx-auto flex flex-col gap-0 lg:hidden"
        onMouseEnter={() => {
          if (!opened) {
            setOpened(true)
          }
        }}
        style={{
          perspective: "1500px",
          height: `${mobileSectionHeight * sectionsData.length}px`,
          width: "100%",
        }}
      >
        {sectionsData.map((section, index) => {
          const isFirst = index === 0
          const delay = opened
            ? index * 0.3
            : (sectionsData.length - index - 1) * 0.3

          return (
            <div
              key={index}
              className={`absolute left-0 transition-all duration-700 ease-in-out shadow-md p-4 ${section.bgColor} flex flex-col justify-between`}
              // style={{
              //   width: "100%",
              //   height: `${mobileSectionHeight}px`, // increased height
              //   top: `${index * mobileSectionHeight}px`,
              //   transformOrigin: "top center",
              //   transform:
              //     isFirst || opened ? "rotateX(0deg)" : "rotateX(-90deg)",
              //   transitionDelay: `${delay}s`,
              //   zIndex: sectionsData.length - index,
              //   backfaceVisibility: "hidden",
              //   opacity: isFirst || opened ? 1 : 0,
              // }}
              style={{
                width: "100%",
                height: `${mobileSectionHeight}px`,
                top: `${index * mobileSectionHeight}px`,
                zIndex: sectionsData.length - index,
              }}
              
            >
              <div className="w-full flex items-center px-2">
                <h3 className="font-extrabold text-[#2050B1] text-[18px] font-tthoves-demibold text-left leading-tight">
                  {section.title}
                </h3>
              </div>

              {/* Reduced mt from 2 to 0 */}
              <div className="mt-0 pr-1 space-y- overflow-y-auto">
                <ul className="space-y-4">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-800 text-sm"
                    >
                      <Image
                        src="/rocket-icon.svg"
                        width={20}
                        height={16}
                        className="w-5 h-4 rotate-45 mt-1.5 shrink-0"
                        alt="rocket-logo"
                      />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FoldOnHoverRoll
