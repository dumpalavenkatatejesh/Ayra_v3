"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [isMobile, setIsMobile] = useState(false)
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)

  const sectionWidth = 320
  const panelHeight = "40vh"
  const introText = "HOW DO YOU WANT TO CHALLENGE YOURSELF OUTSIDE ACADEMICS?"

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const goToNextSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex === sectionsData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevSection = () => {
    setCurrentSectionIndex((prevIndex) =>
      prevIndex === 0 ? sectionsData.length - 1 : prevIndex - 1
    )
  }

  return (
    <>
      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 pb-5">
        <div className="lg:w-[100vh] lg:h-[34vh] h-[15vh] lg:pt-20 pt-10 pb-10 container mx-auto">
          <Image
            src="/opencanvas/opc-img-text.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="container mx-auto"
          />
        </div>

        {/* Desktop View */}
        {!isMobile && (
          <div className="mt-20 mb-20 flex flex-col justify-center items-center">
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
                    key={section.id || index}
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
                              ? "text-[#2050B1] "
                              : "text-black "
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
        )}

        {/* Mobile View */}
        {isMobile && (
          <div className="mt-14 mb-10 flex flex-col justify-center items-center">
            <p className="text-[#2050B1] font-tthoves-bold text-[25px] mb-4 text-center">
              {introText}
            </p>

            <div
              className={`relative w-full shadow-lg ${sectionsData[currentSectionIndex].bgColor}`}
              style={{ height: panelHeight }}
            >
              <div className="p-6 md:p-8 h-full flex flex-col justify-center items-center text-center">
                <h3 className="text-black text-md break-words max-w-[90%]">
                  {sectionsData[currentSectionIndex].title}
                </h3>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                <button
                  onClick={goToPrevSection}
                  className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNextSection}
                  className="bg-blue-500 text-white p-3 rounded-full flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default FoldOnHoverRoll
