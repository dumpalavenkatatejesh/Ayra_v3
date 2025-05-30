import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div
        className="h-[100vh] lg:h-[90vh] bg-cover bg-center text-white relative
  bg-[url('/opencanvas/opc-mob-choose.png')]
  md:bg-[url('/opencanvas/opc-banner-you-choose.jpg')]"
      >
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-6 px-4 text-center w-full md:w-1/2 md:left-[76%] md:transform md:-translate-x-1/2">
          <p className="text-base font-light text-center w-full md:w-2/3 mx-auto opacity-90">
            Your education should reflect who you are and where you want to go.
            At AYRA, you have the freedom to design a path that adapts to your
            interests, evolves with your ambitions, and leads to new
            possibilities.
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
