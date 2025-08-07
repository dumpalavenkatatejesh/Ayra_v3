import Image from "next/image"
import React from "react"

const EmpoweringResearch = () => {
  const items = [
    "At AYRA, research isn’t confined to labs—it starts with ideas. Faculty, students, and collaborators are encouraged to form Research groups around real-world, interdisciplinary problems. The HUB’s open meeting rooms provide space to brainstorm, explore, and co-create.",
    "At AYRA, research isn’t confined to labs—it starts with ideas. Faculty, students, and collaborators are encouraged to form Research groups around real-world, interdisciplinary problems. The HUB’s open meeting rooms provide space to brainstorm, explore, and co-create.",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background Image */}
        <Image
          src="/centre-for-research/empowering.png"
          alt="Design for Community & Comfort"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute bottom-10 left-4 right-4 md:right-20 md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md">
            <ul className="mt-2 md:mt-6 space-y-3 text-sm md:text-base font-tthoves-extralight">
              {items.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10 bg-[url('/centre-for-research/empowering-mob-01.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#2050B1]">
        <div className="flex items-center px-4 lg:pb-10 pb-2">
          <ul className="mt-2 md:mt-6 space-y-3 text-sm font-tthoves-extralight text-white">
            {items.map((text, idx) => (
              <li className="flex items-start gap-2" key={idx}>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-300" />
    </>
  )
}

export default EmpoweringResearch
