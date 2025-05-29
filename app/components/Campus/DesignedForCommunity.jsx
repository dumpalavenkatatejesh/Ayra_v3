import Image from "next/image"
import React from "react"

const DesignedForCommunity = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] container mx-auto my-4">
      {/* Background Image */}
      <Image
        src="/campus/design-banner02.png"
        alt="Design for Community & Comfort"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute bottom-20 flex items-center">
        <div className="pl-6 md:pl-12 lg:pl-20 text-white max-w-[70%]">
          <ul className="mt-6 space-y-4 text-sm md:text-base font-tthoves-extralight">
            <li className="flex items-start gap-2">
              <Image
                src="/rocket-icon.svg"
                width={20}
                height={16}
                className="w-5 h-4 rotate-45 mt-1.5"
                alt="rocket-logo"
              />
              <span>
                Residential facilities that foster connections and collaboration
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/rocket-icon.svg"
                width={20}
                height={16}
                className="w-5 h-4 rotate-45 mt-1.5"
                alt="rocket-logo"
              />
              <span>
                A campus where students can live, learn, and innovate together
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Image
                src="/rocket-icon.svg"
                width={20}
                height={16}
                className="w-5 h-4 rotate-45 mt-1.5"
                alt="rocket-logo"
              />
              <span>
                Social spaces that encourage interaction, creativity, and idea
                exchange
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DesignedForCommunity
