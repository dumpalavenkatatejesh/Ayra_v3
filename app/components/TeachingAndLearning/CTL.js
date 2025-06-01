import React from "react"
import Image from "next/image"

const CTL = () => {
  const paragraphs = [
    "The CTL is envisioned as a dynamic hub that brings together the best of global teaching practices and local educational needs. It exists to support faculty, researchers, and students in shaping learning experiences that are flexible, relevant, and future-focused.",
    "CTL works across AYRA’s Schools and Centres to ensure that our curriculum, pedagogy, and assessment systems are always evolving—keeping pace with change while staying grounded in what matters.",
    "From mentoring faculty in modern pedagogy to co-developing meaningful curriculum updates, the CTL ensures that every learning experience at AYRA is engaging, inclusive, and impactful.",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background image */}
        <Image
          src="/teaching-and-learning/CTL.png"
          alt="Discover Your Campus"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay text */}
        <div className="absolute bottom-10 left-4 right-4 md:right-19 md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md ">
            <ul className="mt-2 md:mt-6 space-y-3 text-sm md:text-base font-tthoves-extralight">
              {paragraphs.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile  */}
      <div className="my-10 bg-[url('/teaching-and-learning/CTL-Mobile.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#002561]">
        <div className="flex items-center px-4  py-6 ">
          <ul className="mt-2 md:mt-10 space-y-5 text-[12px] font-tthoves-extralight text-white">
            {paragraphs.map((text, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CTL
// /teaching-and-learning/CTL-Mobile.png
