import React from "react"
import Image from "next/image"

const CTL = () => {
  const paragraphs = [
    "The CTL is envisioned as a dynamic hub that brings together the best of global teaching practices and local educational needs. It exists to support faculty, researchers, and students in shaping learning experiences that are flexible, relevant, and future-focused.",
    "CTL works across AYRA’s Schools and Centres to ensure that our curriculum, pedagogy, and assessment systems are always evolving—keeping pace with change while staying grounded in what matters.",
    "From mentoring faculty in modern pedagogy to co-developing meaningful curriculum updates, the CTL ensures that every learning experience at AYRA is engaging, inclusive, and impactful.",
  ]

  return (
    <div className="container mx-auto relative h-[500px] md:h-[600px]">
      {/* Background image */}
      <Image
        src="/teaching-and-learning/CTL.png"
        alt="Discover Your Campus"
        width={1200}
        height={600}
        className="w-full h-full"
        priority
      />

      {/* Overlay text */}
      <div className="absolute right-12 bottom-14 flex justify-end items-center">
        <div className="text-white md:max-w-[44%] space-y-4">
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="font-tthoves-extralight text-xs md:text-base"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CTL
