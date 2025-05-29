import React from "react"
import Image from "next/image"
const Vision = () => {
  const items = [
    "Led transformative education initiatives",
    "Built institutions and scaled businesses",
    "Mentored young changemakers across sectors",
    "Championed student wellbeing, inclusion, and creativity",
    "Shaped national and international discourse on education",
  ]
  return (
    <div className=" bg-[#2050B1]">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 container mx-auto">
        {/* Center Vertical Dashed Border */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-dashed-border" />

        {/* Left Side: Title */}
        <div className="pr-2 pl-1 md:pl-0 md:pr-12">
          <Image
            src="/leadership/img1.png"
            alt="Meet The People Behind The Vision"
            width={500}
            height={300}
            className="object-center"
            priority
          />
        </div>

        {/* Right Side: List */}
        <div className="pl-6 md:pl-12 space-y-5 text-[#002561] text-base md:text-lg">
          <h2 className="text-2xl text-white font-extrabold leading-tight max-w-lg">
            At the heart of AYRA is a team of thinkers and doers who have:
          </h2>
          <ul className="mt-6 space-y-4 text-sm md:text-base text-white">
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* <FaPaperPlane className="text-blue-600 mt-1 shrink-0" /> */}
                <Image
                  src="/rocket-icon.svg"
                  width={20}
                  height={16}
                  className="w-5 h-4 rotate-45"
                  alt="rocket-logo"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-extrabold text-white text-center p-6 max-w-4xl">
          Their collective vision is clear: to make AYRA a learning space that
          doesn’t just respond to the future—but helps shape it.
        </p>
      </div>
    </div>
  )
}

export default Vision
