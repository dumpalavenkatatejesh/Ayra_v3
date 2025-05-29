import Image from "next/image"
import React from "react"

const InvestingInYourFuture = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] container mx-auto my-10">
      {/* Background Image */}
      <Image
        src="/admissions/investing-in-future.png"
        alt="Leadership & Entrepreneurship Clubs"
        fill
        className="object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute bottom-1/4 right-24">
        <div className="text-white">
          <div className="space-y-4">
            {/* <h3 className="text-4xl text-white font-bold">
              Develop skills, organise events, and make an impact.
            </h3> */}
            <p className="text-lg font-tthoves-extralight text-white">
              We offer a range of scholarships and financial aid options to{" "}
              <br /> make education accessible for everyone.
            </p>
            <div className="group inline-block">
              <button className="relative px-5 py-1 bg-[#9B64FF] group-hover:bg-[#ab7dff] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                Explore Scholarships
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#2050B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestingInYourFuture
