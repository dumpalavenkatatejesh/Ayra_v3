import Image from "next/image"
import React from "react"

const CampusHeroBanner = () => {
  return (
    <>
      <div className="relative h-screen md:h-[90vh] w-screen md:w-full hidden md:block">
        <div className="absolute inset-0 bg-cover bg-[url('/campus/campus-mob-banner.png')] md:bg-[url('/campus/campus-banner.png')]"></div>
      </div>

      <div className="relative w-full h-screen md:h-[90vh] overflow-hidden block md:hidden">
        {/* Mobile Banner - shown on small screens */}
        <div className="">
          <img
            src="/campus/campus-mob-banner.png"
            alt="EAT Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default CampusHeroBanner
