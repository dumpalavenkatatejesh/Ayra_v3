import React from "react"

import Image from "next/image"
export default function GlobalExchangePrograms() {
  const highlights = [
    "Semester-long and short-term exchange opportunities with partner universities across Europe, Asia, Australia, and North America",
    "Credit-transfer mechanisms to ensure a seamless academic journey",
    "Guidance with applications, travel planning, and cultural orientation",
    "Language support and pre-departure workshops to prepare you for life abroad",
  ]
  return (
    <>
      <div className="w-full">
        <div className="container mx-auto border-r border-l border-dashed border-gray-300">
          <div className="max-w-4xl mx-auto py-12 px-4  md:px-8 space-y-8">
            <div className=" text-center">
              <p className="text-md ">
                At AYRA, we don't just prepare students for careers—we help them
                launch them.
              </p>
              <p className="text-md text-gray-700 leading-relaxed">
                The Placements & Internship Centre is a dynamic platform
                connecting students to real-world opportunities across
                industries, geographies, and career paths.
              </p>
            </div>
            <div className="text-center">
              <p className="text-md text-gray-700 leading-relaxed">
                Whether you're pursuing engineering, liberal arts, business,
                hospitality, or sports sciences, we support you with resources,
                guidance, and access to top organisations and mentors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat py-8">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-7xl tracking-wider font-schabo text-[#2050B1] mb-6">
            WHAT WE OFFER
          </h1>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-5 ">
            {/* Image Left */}
            <div>
              <Image
                src="/international/int-img-1.png"
                width={600}
                height={300}
                alt="faculty highlights"
                className="object-center w-full h-auto"
                priority
              />
            </div>

            {/* Description Right */}
            <div>
              <h2 className="text-xl md:text-4xl text-[#2050B1] font-tthoves-demibold">
                GLOBAL EXCHANGE PROGRAMS
              </h2>

              <h2 className=" text-2xl mt-4 text-black  font-tthoves-regular ">
                Experience education from a new perspective.
              </h2>

              <ul className="mt-4 md:mt-6 space-y-4 text-sm md:text-base text-black font-tthoves-extralight">
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

      <h2 className="text-3xl md:text-7xl tracking-wider font-schabo text-[#2050B1] mb-6 mt-8 container mx-auto px-4 ">
        <span class="block">WHY GO GLOBAL WITH AYRA?</span>
      </h2>

      <div className="w-full container mx-auto px-4 py-10">
        <Image
          src="/international/int-img-2.png"
          alt="Person holding tablet"
          width={1300}
          height={1600}
          className="w-full h-full object-cover "
          priority
        />
      </div>
    </>
  )
}
