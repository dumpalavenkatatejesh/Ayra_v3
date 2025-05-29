import React from "react"
import Image from "next/image"

const Action = () => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="flex justify-center max-w-5xl mx-auto my-10 px-4 md:px-0 ">
          <Image
            src="/leadership/LIA.png"
            alt="Discover Your Campus"
            width={500}
            height={339}
          />
        </div>

        <div className="flex flex-col justify-center items-center px-4 md:px-0 max-w-5xl mx-auto text-center">
          <p className="text-base md:text-lg py-4 font-light">
            You’ll see our leadership at open town halls, walking the campus,
            and listening more than they speak. You’ll feel their impact in the
            design of your courses, the flexibility of your academic pathways,
            and the culture of possibility that permeates everything at AYRA.
          </p>

          <p className="text-lg md:text-xl font-bold py-2">
            Because here, leadership is not about hierarchy.
          </p>

          <h1 className="text-xl md:text-2xl font-bold py-2 max-w-3xl">
            It’s about holding space—for growth, for risk-taking, for
            transformation.
          </h1>

          <div className="flex flex-wrap justify-center gap-4 py-6">
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
              Meet Our Leadership Team
            </button>
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
              Explore Our Founding Vision
            </button>
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300">
              Meet Our Leadership Team
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Action
