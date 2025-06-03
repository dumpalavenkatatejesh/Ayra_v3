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
      isText: true,
      title: "STUDENT-CENTRIC <br/> THINKING",
      content:
        "Every decision is filtered through one lens: what’s best for the learner. From curriculum design to campus life, our leadership ensures that student agency and wellbeing remain central.",
    },
    {
      isText: false,
      image: "/admissions/masters_programs/what_set_us.png",
      alt: "ACADEMIC EXCELLENCE, REINVENTED",
    },
    {
      isText: true,
      title: "ACADEMIC EXCELLENCE, <br/> REINVENTED",
      content:
        "We uphold rigorous academic standards while questioning outdated models. Our leaders bring progressive pedagogy, future-focused frameworks, and global best practices to the table.",
    },
    {
      isText: false,
      image: "/leadership/img2.png",
      content: "Designed Around You",
    },
    {
      isText: true,
      title: "COLLABORATION ACROSS <br/> BORDERS",
      content:
        "Our leadership cultivates relationships with leading universities, industries, and policy bodies—ensuring Ayra remains connected, relevant, and globally engaged.",
    },
  ]

  // Track scroll to enable/disable internal lock
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

  // Handle desktop wheel and mobile touch
  useEffect(() => {
    const threshold = 100
    let touchStartY = 0

    const handleWheel = (e) => {
      if (!insideRef.current) return

      const atFirst = currentIndexRef.current === 0
      const atLast = currentIndexRef.current === blocks.length - 1

      // Prevent scrolling past bounds
      if ((e.deltaY < 0 && atFirst) || (e.deltaY > 0 && atLast)) return

      e.preventDefault()

      // Only change slide if not currently animating
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true

        // Determine direction based on scroll
        const nextIndex =
          e.deltaY > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0)

        setCurrentSlide(nextIndex)
        currentIndexRef.current = nextIndex

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false
        }, 700)
      }
    }

    const handleTouchStart = (e) => {
      if (!insideRef.current) return
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e) => {
      if (!insideRef.current) return

      const touchEndY = e.touches[0].clientY
      const deltaY = touchStartY - touchEndY

      const atFirst = currentIndexRef.current === 0
      const atLast = currentIndexRef.current === blocks.length - 1

      if ((deltaY < 0 && atFirst) || (deltaY > 0 && atLast)) return

      e.preventDefault()

      // Only change slide if the touch movement is significant and not currently animating
      if (Math.abs(deltaY) >= 50 && !isAnimatingRef.current) {
        isAnimatingRef.current = true

        const nextIndex =
          deltaY > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0)

        setCurrentSlide(nextIndex)
        currentIndexRef.current = nextIndex

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false
        }, 700)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [blocks.length])

  return (
    <div
      ref={trackRef}
      style={{ height: `${blocks.length * 100}vh` }}
      className="relative hidden md:block"
    >
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex flex-col md:flex-row bg-white transition-opacity duration-500"
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex justify-center md:items-center items-end px-4 md:px-6 h-[50vh] md:h-[100vh] bg-white">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-center md:text-start">
            WHAT GUIDES OUR <br /> LEADERSHIP <br /> APPROACH
          </h2>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] overflow-hidden relative flex items-center justify-center">
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
                {block.isText ? (
                  <div
                    className={`max-w-xl px-4 md:px-0 text-center md:text-left transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <h3
                      className="text-2xl md:text-3xl  text-[#2050B1] mb-2 md:mb-4 uppercase font-tthoves-bold"
                      dangerouslySetInnerHTML={{ __html: block.title }}
                    ></h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                      {block.content}
                    </p>
                  </div>
                ) : (
                  <img
                    src={block.image}
                    alt={block.alt}
                    className={`w-full h-auto max-h-[40vh] md:max-h-[80vh] shadow-lg px-4 md:px-0 object-contain transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
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
