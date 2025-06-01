"use client"

import React, { useEffect, useRef, useState } from "react"

const ApproachAnimation = () => {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const blocksRef = useRef([])
  const currentIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const scrollProgressRef = useRef(0)
  const insideRef = useRef(false)

  const [currentSlide, setCurrentSlide] = useState(0)

  const blocks = [
    {
      type: "text",
      title: "STUDENT-CENTRIC <br/> THINKING",
      text: "Every decision is filtered through one lens: what’s best for the learner. From curriculum design to campus life, our leadership ensures that student agency and wellbeing remain central.",
    },
    {
      type: "image",
      src: "/admissions/masters_programs/what_set_us.png",
      alt: "ACADEMIC EXCELLENCE, REINVENTED",
    },
    {
      type: "text",
      title: "ACADEMIC EXCELLENCE, <br/> REINVENTED",
      text: "We uphold rigorous academic standards while questioning outdated models. Our leaders bring progressive pedagogy, future-focused frameworks, and global best practices to the table.",
    },
    {
      type: "image",
      src: "/leadership/img2.png",
      alt: "Designed Around You",
    },
    {
      type: "text",
      title: "COLLABORATION ACROSS <br/> BORDERS",
      text: "Our leadership cultivates relationships with leading universities, industries, and policy bodies—ensuring Ayra remains connected, relevant, and globally engaged.",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const trackEl = trackRef.current
      if (!trackEl) return

      const rect = trackEl.getBoundingClientRect()
      const isInside = rect.top <= 0 && rect.bottom > window.innerHeight

      insideRef.current = isInside
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle internal transitions (both directions)
  useEffect(() => {
    const handleWheel = (e) => {
      if (!insideRef.current) return

      const atFirst = currentIndexRef.current === 0
      const atLast = currentIndexRef.current === blocks.length - 1

      // If at first or last, allow scroll out
      if ((e.deltaY < 0 && atFirst) || (e.deltaY > 0 && atLast)) return

      // Prevent scrolling page
      e.preventDefault()

      // Reset progress if scroll direction changes
      if (
        (scrollProgressRef.current > 0 && e.deltaY < 0) ||
        (scrollProgressRef.current < 0 && e.deltaY > 0)
      ) {
        scrollProgressRef.current = 0
      }

      scrollProgressRef.current += e.deltaY

      const threshold = 100

      if (
        Math.abs(scrollProgressRef.current) >= threshold &&
        !isAnimatingRef.current
      ) {
        isAnimatingRef.current = true

        let nextIndex =
          scrollProgressRef.current > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0)

        setCurrentSlide(nextIndex)
        currentIndexRef.current = nextIndex
        scrollProgressRef.current = 0

        setTimeout(() => {
          isAnimatingRef.current = false
        }, 700)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [blocks.length])

  return (
    <div
      ref={trackRef}
      style={{ height: `${blocks.length * 100}vh` }}
      className="relative"
    >
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex flex-col md:flex-row bg-white transition-opacity duration-500"
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex justify-center items-start md:items-center px-4 md:px-6 mt-8 md:mt-0 pt-14  md:pt-10 h-[30vh] md:h-screen md:sticky md:top-0 bg-white ">
          <h2 className="text-7xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-start">
            WHAT GUIDES OUR <br />
            LEADERSHIP <br />
            APPROACH
          </h2>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-[100vh] overflow-hidden relative flex items-center justify-center">
          <div className="relative w-full h-full">
            {blocks.map((block, index) => (
              <div
                key={index}
                ref={(el) => (blocksRef.current[index] = el)}
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center px-4 md:px-12 transition-all duration-700 ease-out
                  ${
                    index === currentSlide
                      ? "opacity-100 translate-x-0"
                      : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                style={{
                  transitionProperty: "opacity, transform",
                  zIndex: index === currentSlide ? 1 : 0,
                }}
              >
                {block.type === "text" ? (
                  <div className="max-w-xl px-4 md:px-0 text-center md:text-left ">
                    <h3
                      className="text-2xl md:text-3xl  text-[#2050B1] mb-2 md:mb-4 uppercase font-tthoves-bold"
                      dangerouslySetInnerHTML={{ __html: block.title }}
                    ></h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      {block.text}
                    </p>
                  </div>
                ) : (
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full h-auto max-h-[40vh] md:max-h-[80vh] shadow-lg px-4 md:px-0 object-contain"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproachAnimation
// dangerouslySetInnerHTML={{ __html: block.title }}
