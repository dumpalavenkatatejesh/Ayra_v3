"use client"

import React, { useEffect, useRef, useState } from "react"

const OurFacultyPhilosophy = () => {
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
      title: "Learning as a Partnership",
      text: "Teaching at AYRA is grounded in dialogue, co-creation, and mentorship. Faculty are collaborators in your learning journey, not just instructors.",
    },
    {
      type: "image",
      src: "/admissions/masters_programs/what_set_us.png",
      alt: "Future Ready",
    },
    {
      type: "text",
      title: "Bridging Theory and Practice",
      text: "From corporate boardrooms to field research, our faculty bring diverse experiences into the classroom, making learning dynamic, applied, and relevant.",
    },
    {
      type: "image",
      src: "/admissions/masters_programs/what_set_us_1.png",
      alt: "Designed Around You",
    },
    {
      type: "text",
      title: "Interdisciplinary by Default",
      text: "You'll find business professors collaborating with tech faculty, and artists working with data scientists. Because at AYRA, problems don't come in silos—so neither should learning.",
    },
    {
      type: "image",
      src: "/admissions/masters_programs/what_set_us_1.png",
      alt: "Designed Around You",
    },
    {
      type: "text",
      title: "Always Evolving",
      text: "Our faculty are lifelong learners themselves. They continuously evolve their teaching practice to respond to new knowledge, technologies, and student needs.",
    }
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
    let lastScrollTime = 0
    const scrollCooldown = 1000 // 1.5 second cooldown between scrolls
    const scrollThreshold = 50 // Minimum scroll amount to trigger slide change

    const handleWheel = (e) => {
      if (!insideRef.current) return

      const now = Date.now()
      if (now - lastScrollTime < scrollCooldown) {
        e.preventDefault()
        return
      }

      const atFirst = currentIndexRef.current === 0
      const atLast = currentIndexRef.current === blocks.length - 1

      // Allow normal scroll when at last item and scrolling down
      if (atLast && e.deltaY > 0) {
        return
      }

      // Allow normal scroll when at first item and scrolling up
      if (atFirst && e.deltaY < 0) {
        return
      }

      // Only trigger if scroll amount is significant
      if (Math.abs(e.deltaY) < scrollThreshold) {
        e.preventDefault()
        return
      }

      e.preventDefault()

      // Only change slide if not currently animating
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true
        lastScrollTime = now

        // Determine direction based on scroll
        const nextIndex =
          e.deltaY > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0)

        // Force a re-render by setting current slide to null first
        setCurrentSlide(null)
        setTimeout(() => {
          setCurrentSlide(nextIndex)
          currentIndexRef.current = nextIndex
        }, 50)

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false
        }, 1000)
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

      // Allow normal scroll when at last item and swiping down
      if (atLast && deltaY > 0) {
        return
      }

      // Allow normal scroll when at first item and swiping up
      if (atFirst && deltaY < 0) {
        return
      }

      // Only trigger if touch movement is significant
      if (Math.abs(deltaY) < scrollThreshold) {
        e.preventDefault()
        return
      }

      e.preventDefault()

      // Only change slide if not currently animating
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true

        const nextIndex =
          deltaY > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0)

        // Force a re-render by setting current slide to null first
        setCurrentSlide(null)
        setTimeout(() => {
          setCurrentSlide(nextIndex)
          currentIndexRef.current = nextIndex
        }, 50)

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false
        }, 1000)
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
      className="relative"
    >
      <div 
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex flex-col md:flex-row bg-white transition-opacity duration-500"
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex justify-center md:items-center items-end px-4 md:px-6 h-[50vh] md:h-[100vh] bg-white">
          <h2 className="text-6xl sm:text-6xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-center md:text-start">
            OUR FACULTY <br className="hidden md:block" /> PHILOSOPHY
          </h2>
        </div> 

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-[75vh] md:h-[100vh] overflow-hidden relative flex items-center justify-center">
          <div className="relative w-full h-full">
            {blocks.map((block, index) => (
              <div
                key={index}
                ref={(el) => (blocksRef.current[index] = el)}
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center transition-all duration-1000 ease-in-out
                  ${index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                style={{
                  transitionProperty: "opacity, transform",
                  zIndex: index === currentSlide ? 1 : 0,
                  pointerEvents: index === currentSlide ? "auto" : "none",
                  visibility: index === currentSlide ? "visible" : "hidden"
                }}
              >
                {block.type === "text" ? (
                  <div
                    className={`w-full max-w-2xl px-8 md:px-12 text-center transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                  >
                    <h3 className="text-2xl sm:text-3xl md:text-5xl text-[#2050B1] font-tthoves-bold mb-6 md:mb-8 uppercase">
                      {block.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-2xl font-tthoves-extralight text-gray-700 leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center px-4 md:px-8">
                    <img
                      src={block.src}
                      alt={block.alt}
                      className={`w-full h-auto max-h-[60vh] md:max-h-[80vh] object-contain transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                        }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurFacultyPhilosophy
