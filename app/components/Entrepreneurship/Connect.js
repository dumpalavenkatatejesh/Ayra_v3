import React from "react"
import Image from "next/image"
const Connect = () => {
  return (
    <>
      <div className=" bg-[#002561] h-[600px] border-b  border-gray-500">
        <div className="px-4 md:px-0 py-10 md:py-14 flex justify-center items-center border-b border-dashed border-gray-300">
          <Image
            src="/entrepreneurship/connect.png"
            alt="What We Offer"
            width={1000}
            height={800}
          />
        </div>
        <div className="flex flex-col  justify-center items-center text-white px-4 md:px-0 py-2 md:py-6 text-center">
          <h3 className="max-w-xl text-sm md:text-base py-4 font-tthoves-extralight">
            AYRA’s Centre for Entrepreneurship is not just a support
            service—it’s a community of builders, thinkers, and doers.
          </h3>
          <h1 className="max-w-3xl text-lg md:text-2xl py-4 font-tthoves-extralight">
            Whether you’re still forming your first idea or ready to pitch to
            investors, this is your launchpad.
          </h1>
          <h2 className="max-w-lg text-lg md:text-xl font-tthoves-extralight">
            Here, your ambition meets opportunity.
          </h2>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 py-8 md:py-10">
            <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
              Explore the Centre
            </button>
            <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
              Meet the Mentors
            </button>
            <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
              Submit Your Idea
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
