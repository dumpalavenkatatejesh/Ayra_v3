import React from "react"
import Image from "next/image"

const EntrepreneurialThinkers = () => {
  const paragraphs = [
    "We’re not only building founders—we’re shaping entrepreneurial mindsets. From entrepreneurs driving innovation within organisations to change-makers solving local and global challenges, the Centre empowers students to take initiative and lead with purpose.",
    "If you’re ready to imagine boldly, solve creatively, and build fearlessly, the Centre for Entrepreneurship is your starting point.",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background image */}
        <Image
          src="/entrepreneurship/img2.png"
          alt="entrepreneurship"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay text */}
        <div className="absolute bottom-28 left-4 right-4 md:right-[60px] md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md">
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
      <div className="my-10 bg-[url('/entrepreneurship/entrepreneurship-mobile.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#002561]">
        <div className="flex items-center px-4 pb-10  ">
          <ul className="mt-2 md:mt-10 space-y-5 text-sm font-tthoves-extralight text-white">
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

export default EntrepreneurialThinkers

// /entrepreneurship/entrepreneurship-mobile.png
