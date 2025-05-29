import Image from "next/image"
import React from "react"

const ShapingTheFuture = () => {
  return (
    <div className="py-10 bg-[#002561] mt-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/centre-for-research/shaping-the-future.png"
            width={900}
            height={300}
            className="object-contain w-full max-w-4xl"
            priority
            alt="shaping the future"
          />
        </div>

        <hr className="border-t border-dashed border-gray-300 my-5" />

        <div className="mb-5 flex flex-col items-center gap-4 text-white max-w-screen-lg mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-center px-2 sm:px-4">
            Whether it’s improving access to clean water, enhancing athlete
            performance, or designing sustainable energy systems, AYRA is
            committed to knowledge that matters.
          </p>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-center w-full sm:w-4/5 px-4">
            At AYRA, research isn’t just supported—it’s celebrated. And it all
            starts with a question.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="group inline-block">
              <button className="relative px-5 py-2 bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                Connect with ARCH
              </button>
            </div>
            <div className="group inline-block">
              <button className="relative px-5 py-2 bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] transition-all duration-300 w-full sm:w-auto text-sm sm:text-base">
                Explore Research at AYRA
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShapingTheFuture
