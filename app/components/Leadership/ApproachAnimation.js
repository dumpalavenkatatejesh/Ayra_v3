"use client"

import React, { useEffect, useRef, useState } from "react"

const ApproachAnimation = () => {
  const sectionRef = useRef(null)
  const blocksRef = useRef([])
  const currentIndexRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const scrollProgressRef = useRef(0)
  const lastScrollY = useRef(0) // Initialize with 0 to avoid window access during SSR
  const entryPointRef = useRef(null)

  const [active, setActive] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullyVisible, setIsFullyVisible] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const [canScroll, setCanScroll] = useState(true)

  const blocks = [
    {
      type: "text",
      title: "STUDENT-CENTRIC THINKING",
      text: "Every decision is filtered through one lens: what’s best for the learner. From curriculum design to campus life, our leadership ensures that student agency and wellbeing remain central.",
    },
    {
      type: "image",
      src: "/leadership/approach-1.png",
      alt: "ACADEMIC EXCELLENCE, REINVENTED",
    },
    {
      type: "text",
      title: "ACADEMIC EXCELLENCE, REINVENTED",
      text: "We uphold rigorous academic standards while questioning outdated models. Our leaders bring progressive pedagogy, future-focused frameworks, and global best practices to the table.",
    },
    {
      type: "image",
      src: "/leadership/img2.png",
      alt: "Designed Around You",
    },
    {
      type: "text",
      title: "COLLABORATION ACROSS BORDERS",
      text: "Our leadership cultivates relationships with leading universities, industries, and policy bodies—ensuring Ayra remains connected, relevant, and globally engaged.",
    },
  ]

  const resetStates = () => {
    setActive(false)
    setCanScroll(true)
    document.body.style.overflow = ""
    isAnimatingRef.current = false
    scrollProgressRef.current = 0
  }

  useEffect(() => {
    lastScrollY.current = window.scrollY // Now it's safe to assign
    const handleScroll = () => {
      if (!isFullyVisible) {
        const currentScrollY = window.scrollY
        const isUp = currentScrollY < lastScrollY.current
        setIsScrollingUp(isUp)

        if (entryPointRef.current === null) {
          entryPointRef.current = isUp
        }

        lastScrollY.current = currentScrollY
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    const handleVisibility = (entries) => {
      const [entry] = entries

      if (entry.intersectionRatio >= 0.95) {
        setIsFullyVisible(true)
        setActive(true)
        setCanScroll(false)
        document.body.style.overflow = "hidden"

        const initialIndex = entryPointRef.current ? blocks.length - 1 : 0
        setCurrentSlide(initialIndex)
        currentIndexRef.current = initialIndex
      } else if (entry.intersectionRatio < 0.5) {
        setIsFullyVisible(false)
        resetStates()
        entryPointRef.current = null
      }
    }

    const observer = new IntersectionObserver(handleVisibility, {
      threshold: [0, 0.5, 0.95, 1.0],
      rootMargin: "0px",
    })

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (section) observer.unobserve(section)
    }
  }, [blocks.length, isFullyVisible])

  useEffect(() => {
    if (!active || !isFullyVisible) return

    const handleWheel = (e) => {
      if (isAnimatingRef.current) {
        e.preventDefault()
        return
      }

      const isScrollingDown = e.deltaY > 0

      if (canScroll) {
        if (
          (entryPointRef.current &&
            !isScrollingDown &&
            currentIndexRef.current === 0) ||
          (!entryPointRef.current &&
            isScrollingDown &&
            currentIndexRef.current === blocks.length - 1)
        ) {
          return
        }
        e.preventDefault()
        setCanScroll(false)
        document.body.style.overflow = "hidden"
      }

      e.preventDefault()
      scrollProgressRef.current += e.deltaY
      const scrollThreshold = 500

      if (Math.abs(scrollProgressRef.current) >= scrollThreshold) {
        isAnimatingRef.current = true

        let nextIndex = isScrollingDown
          ? currentIndexRef.current + 1
          : currentIndexRef.current - 1

        nextIndex = Math.max(0, Math.min(blocks.length - 1, nextIndex))

        if (nextIndex !== currentIndexRef.current) {
          setCurrentSlide(nextIndex)
          currentIndexRef.current = nextIndex

          if (entryPointRef.current) {
            if (nextIndex === 0 && !isScrollingDown) {
              setCanScroll(true)
              document.body.style.overflow = ""
            }
          } else {
            if (nextIndex === blocks.length - 1 && isScrollingDown) {
              setCanScroll(true)
              document.body.style.overflow = ""
            }
          }
        }

        setTimeout(() => {
          isAnimatingRef.current = false
          scrollProgressRef.current = 0
        }, 1000)
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [active, isFullyVisible, blocks.length, canScroll])

  return (
    <div
      ref={sectionRef}
      className={`h-screen flex bg-white transition-opacity duration-500 ${
        isFullyVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Left Fixed Panel */}
      <div className="w-1/2 flex justify-center items-center px-6 h-screen sticky top-0 bg-white">
        <h2 className="text-4xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-start">
          WHAT GUIDES OUR <br />
          LEADERSHIP
          <br />
          APPROACH
        </h2>
      </div>

      {/* Right Content Panel */}
      <div className="w-1/2 h-screen overflow-hidden relative">
        <div className="h-full w-full">
          {blocks.map((block, index) => (
            <div
              key={index}
              ref={(el) => (blocksRef.current[index] = el)}
              className={`absolute top-0 left-0 w-full h-full flex justify-center items-center px-12 transition-all duration-1000 ease-out
                ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : entryPointRef.current
                    ? index > currentSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
            >
              {block.type === "text" ? (
                <div className="max-w-xl">
                  <h3 className="text-xl md:text-2xl font-bold text-[#2050B1] mb-4 uppercase">
                    {block.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    {block.text}
                  </p>
                </div>
              ) : (
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApproachAnimation
