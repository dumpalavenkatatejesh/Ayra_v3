import React from "react"
import Image from "next/image"
const Connect = () => {
  return (
    <>
      <div className=" w-full">
        <div className="w-full bg-[#002561] h-[600px]">
          <div className="py-14 flex justify-center items-center border-b border-dashed border-gray-300">
            <Image
              src="/entrepreneurship/connect.png"
              alt="What We Offer"
              width={1000}
              height={800}
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white py-8 text-center">
            <h3 className="max-w-xl py-4 ">
              AYRA’s Centre for Entrepreneurship is not just a support
              service—it’s a community of builders, thinkers, and doers.
            </h3>
            <h1 className="max-w-3xl text-2xl py-4">
              Whether you’re still forming your first idea or ready to pitch to
              investors, this is your launchpad.
            </h1>
            <h2 className="max-w-lg text-xl">
              Here, your ambition meets opportunity.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 py-10">
              <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
                Meet Our Leadership Team
              </button>
              <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
                Explore Our Founding Vision
              </button>
              <button className="px-5 py-2 bg-[#FFFFFF] border border-dashed border-[#707070] text-[#2050B1] cursor-pointer hover:bg-white transition-colors duration-300 ">
                Meet Our Leadership Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Connect
