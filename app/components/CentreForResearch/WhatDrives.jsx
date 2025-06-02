import Image from "next/image"
import React from "react"
import AyraResearch from "./AyraResearch"

const WhatDrives = () => {
  const highlights = [
    "Fostering Innovation through cross-disciplinary collaboration and creativity",
    "Responding to real-world needs evidence-based inquiry and applied solutions",
    "Creating Knowledge That Travels across sectors, communities, and geographies",
  ]

  return (
    <div className="pt-5 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#2050B1]">
          WHAT DRIVES RESEARCH <br className="hidden md:block" /> AT AYRA?
        </h1>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-5 md:mt-5">
          {/* Image Left */}
          <div>
            <Image
              src="/centre-for-research/img01.png"
              width={600}
              height={300}
              alt="faculty highlights"
              className="object-center w-full h-auto"
              priority
            />
          </div>

          {/* Description Right */}
          <div>
            <h2 className="text-xl md:text-3xl text-[#2050B1] font-tthoves-demibold">
              AYRA’S RESEARCH ECOSYSTEM IS BUILT AROUND THREE KEY GOALS:
            </h2>
            <ul className="mt-6 md:mt-10 space-y-4 text-sm md:text-base text-black font-tthoves-extralight">
              {highlights.map((text, idx) => (
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
    </div>
  )
}

export default WhatDrives
