import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      <div
        className="h-[90vh] bg-cover bg-center text-white relative
           bg-[url('/opencanvas/opc-mob-choose.png')]
           md:bg-[url('/international/int-banner-img.jpg')]"
      >
        {/* Centered paragraph at bottom */}
        <div className="absolute bottom-10 px-4 text-center w-full md:w-1/2 md:left-[76%] md:transform md:-translate-x-1/2"></div>
      </div>
    </>
  )
}

export default Banner
