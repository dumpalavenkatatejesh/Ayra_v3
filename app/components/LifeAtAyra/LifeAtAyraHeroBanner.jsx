import Image from "next/image"
import React from "react"

const LifeAtAyraHeroBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full hidden md:block">
        {/* Background Images */}
        <div className="absolute inset-0 bg-cover md:bg-[url('/life-at-ayra/student-life-banner.png')] bg-[url('/life-at-ayra/mob-banner.png')]"></div>
      </div>

      {/* Mobile Banner - shown on small screens */}
      <div className="relative w-full h-screen md:h-[90vh] overflow-hidden block md:hidden">
        <div className="">
          <img
            src="/life-at-ayra/mob-banner.png"
            alt="EAT Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default LifeAtAyraHeroBanner
