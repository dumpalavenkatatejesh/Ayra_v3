import React from "react"
import Image from "next/image"
import Scroll from "./Scroll"

const CTLOffer = () => {
  return (
    <>
      <div className="container mx-auto md:py-8">
        {/* Header Image */}
        <div className="md:w-[40%] px-4 md:px-0">
          <Image
            src="/teaching-and-learning/head_line.png"
            alt="Head Line"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Main Image */}
        <div className=" my-8">
          <Image
            src="/teaching-and-learning/CTL-image.png"
            alt="Teaching and Learning"
            width={1920}
            height={600}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Scr ollable Paragraphs */}
        <Scroll />
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#002561] text-white py-8  text-sm md:text-2xl px-2 md:px-0 flex items-center justify-center border-b border-gray-300 border-dashed">
        <h2 className=" text-center md:max-w-6xl font-tthoves-light ">
          For learners and educators who believe in growing together, the Centre
          for Teaching & Learning is your space to evolve.
        </h2>
      </div>
    </>
  )
}

export default CTLOffer
