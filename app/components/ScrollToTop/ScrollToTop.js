"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed z-50 bottom-4 right-4 flex flex-col items-center justify-center transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transition: "opacity 0.5s" }}
      aria-label="Scroll to top"
    >
      <Image
        src="/rocket-icon.svg"
        alt="Scroll to top"
        width={600}
        height={400}
        className="w-8 h-8 mb-1"
      />
   <p className="text-gray-400 text-xs text-center">Back to Top</p>

    </button>
  )
}

export default ScrollToTop
