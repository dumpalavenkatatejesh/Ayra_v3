"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

const images = [
  "/opencanvas/rocket1.png",
  "/opencanvas/rocket2.png",
  "/opencanvas/rocket3.png",
  "/opencanvas/rocket4.png",
  "/opencanvas/rocket5.png",
  "/opencanvas/rocket6.png",
  "/opencanvas/rocket7.png",
]

const headings = [
  "How do you like to approach learning?  ",
  "What kind of flexibility do you need?",
  "How do you see yourself applying what you learn?",
  "How important is experiential learning to you?",
  "Are you interested in earning certifications alongside your degree?",
  "Do you see sports as part of your future?",
  "What kind of campus experience excites you?",
]

const subtexts = [
  "I like having a clear roadmap—structured, guided learning with milestones to hit.",
  "I’d love to explore different subjects before deciding on my final path.",
  "I want to launch something of my own—a startup, a business, or a big idea.",
  "I learn by doing—hands-on projects and real-world applications.",
  "Absolutely—certifications that give me a career edge sound great.",
  "Yes! I want to build a career in sports or a related industry",
  "A 24/7 learning space where I can explore ideas whenever inspiration hits ",
]

export default function PaperFoldingScroll() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollPerSection, setScrollPerSection] = useState(500)

  useEffect(() => {
    setScrollPerSection(window.innerHeight / 1.5)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const trackEl = trackRef.current
      const sectionEl = sectionRef.current
      if (!trackEl || !sectionEl) return

      const scrollY = window.scrollY
      const trackTop = trackEl.offsetTop
      const maxIndex = headings.length - 1

      const scrollOffset = scrollY - trackTop

      if (scrollOffset >= 0) {
        let newIndex = Math.floor(scrollOffset / scrollPerSection)
        newIndex = Math.min(Math.max(newIndex, 0), maxIndex)
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex)
        }
      } else {
        if (activeIndex !== 0) setActiveIndex(0)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollPerSection, activeIndex])

  const trackHeight = `calc(100vh + ${
    (headings.length - 1) * scrollPerSection
  }px)`

  return (
    <div ref={trackRef} style={{ height: trackHeight }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center"
      >
        <div className="relative z-10 flex flex-col md:flex-row-reverse w-full container mx-auto gap-6 md:gap-4 h-auto md:h-[100vh] py-10 md:py-0">
          {/* Image on top for mobile, right for desktop */}
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center gap-4 mb-6 md:mb-0">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <Image
                src={images[activeIndex]}
                alt={`Rocket ${activeIndex + 1}`}
                className="w-full h-full object-contain"
                width={160}
                height={160}
                priority
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300 relative">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted border-gray-400 h-full" />
          </div>

          {/* Text on bottom for mobile, left for desktop */}
          <div className="w-full md:w-[70%] flex flex-col justify-center px-4 md:pr-4 relative text-center md:text-left">
            <div className="h-auto">
              <h2 className="text-2xl md:text-[60px] uppercase text-[#002561] mb-4 leading-tight font-schabo">
                {headings[activeIndex]}
              </h2>
              <p className="text-base md:text-xl text-black font-medium">
                {subtexts[activeIndex]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
