import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div
        className="h-[90vh] bg-cover bg-center text-white relative 
  bg-[url('/opencanvas/opc-mob-pace.png')] 
  md:bg-[url('/opencanvas/opc-banner02-pace.jpg')]"
      >
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-10 md:bottom-20 text-center px-4 w-full md:w-1/2 left-1/2 lg:left-[25%] transform -translate-x-1/2">
          <p className="text-sm md:text-base font-light text-start w-full md:w-2/3 mx-auto opacity-90">
            At AYRA, learning isn’t one-size-fits-all. Whether you prefer
            structured coursework, self-directed exploration, or hands-on
            experiences, you’ll find a rhythm that works for you.
          </p>
        </div>
      </div>

      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 border-b-2 border-dotted border-gray-300">
        <div className="container mx-auto w-full h-full  pt-10 pb-10">
          <Image
            src="/opencanvas/opc-img-boat.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="lg:w-full  lg:h-full w-[100vh] h-[15vh] "
          />
        </div>
      </div>
    </>
  )
}

export default Banner
