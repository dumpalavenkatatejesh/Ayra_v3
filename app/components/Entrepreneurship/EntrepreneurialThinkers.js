import React from "react"
import Image from "next/image"

const EntrepreneurialThinkers = () => {
  const paragraphs = [
    "We’re not only building founders—we’re shaping entrepreneurial mindsets. From entrepreneurs driving innovation within organisations to change-makers solving local and global challenges, the Centre empowers students to take initiative and lead with purpose.",
    "If you’re ready to imagine boldly, solve creatively, and build fearlessly, the Centre for Entrepreneurship is your starting point.",
  ]

  return (
    <>
      {/* Desktop & Tablet */}
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-5 hidden md:block">
        {/* Background Image */}
        <Image
          src="/entrepreneurship/img2.png"
          alt="entrepreneurship"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Text */}
        <div className="absolute bottom-28 left-4 right-4 md:right-[60px] md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md">
            <ul className="space-y-3 text-sm md:text-base font-tthoves-extralight leading-relaxed">
              {paragraphs.map((text, idx) => (
                <li className="flex items-start gap-2" key={idx}>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="my-10 bg-[#002561] bg-[url('/entrepreneurship/entrepreneurship-mobile.png')] bg-cover bg-center h-[100dvh] flex items-end md:hidden">
        <div className="px-4 pb-10 w-full">
          <ul className="space-y-5 text-sm font-tthoves-extralight text-white leading-relaxed">
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
