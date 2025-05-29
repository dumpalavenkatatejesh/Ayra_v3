import Image from "next/image"
import React from "react"

const WhatOurStudentsCanExpect = () => {
  const items = [
    "A faculty that adapts to different learning styles",
    "A space where curiosity is encouraged and failure is seen as part of learning",
    "A mix of academic rigour and creative freedom",
    "Faculty who are approachable, invested, and always available for one more question",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5">
        {/* Background Image */}
        <Image
          src="/faculty/what-our-student.png"
          alt="Design for Community & Comfort"
          fill
          className="object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute right-0 bottom-20 flex justify-center items-center">
          <div className="text-white max-w-[70%]">
            <ul className="mt-6 space-y-4 text-sm md:text-base font-tthoves-extralight">
              {items.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <Image
                    src="/rocket-icon.svg"
                    width={20}
                    height={16}
                    className="w-5 h-4 rotate-45 mt-1.5"
                    alt="rocket-logo"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t border-dashed border-gray-300" />
    </>
  )
}

export default WhatOurStudentsCanExpect
