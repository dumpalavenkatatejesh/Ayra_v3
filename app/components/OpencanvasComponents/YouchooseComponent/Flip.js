"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import {
  RiArrowRightUpFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri"
import { sectionsData } from "@/app/utils/FlipData"

const FoldOnHoverRoll = () => {
  const [hovered, setHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const sectionWidth = 350
  const height = "50vh"

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sectionsData.length)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? sectionsData.length - 1 : prevIndex - 1
    )
  }

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

      {/* Desktop */}
      {!isMobile && (
        <div
          className="relative  container mx-auto flex mb-5"
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
                className={`absolute top-0 transition-all duration-700 ease-in-out shadow-md p-4 ${section.bgColor} flex flex-col justify-between`}
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
                {/* Heading */}
                <div className="w-full flex items-center  px-2">
                  <h3 className="font-extrabold text-[#2050B1] text-[20px] font-tthoves-demibold text-left leading-tight">
                    {section.title}
                  </h3>
                </div>

                {/* List */}
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
      )}

      {/* Mobile */}
      {isMobile && (
        <div className="relative mt-10 mb-10 flex flex-col items-center w-full max-w-md mx-auto">
          {/* Slider Content */}
          <div
            className={`shadow-md p-5 ${sectionsData[currentSlide].bgColor} flex flex-col w-full`}
            style={{ height }}
          >
            <div className="mb-4 flex items-center justify-start h-[28%] px-2">
              <h3 className="font-extrabold text-[#2050B1] text-[20px] text-left font-tthoves-demibold">
                {sectionsData[currentSlide].title}
              </h3>
            </div>

            <div className="h-[72%] overflow-y-auto mt-2">
              <ul className="space-y-2">
                {sectionsData[currentSlide].points.map((point, i) => (
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
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              onClick={goToPrevSlide}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-200"
              aria-label="Previous slide"
            >
              <RiArrowLeftSLine size={24} />
            </button>
            <button
              onClick={goToNextSlide}
              className="bg-blue-500 text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-200"
              aria-label="Next slide"
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FoldOnHoverRoll
