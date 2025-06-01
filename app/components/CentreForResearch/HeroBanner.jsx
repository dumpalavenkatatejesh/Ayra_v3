import React from "react"

const HeroBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full hidden md:block">
        <div className="absolute inset-0 bg-cover bg-[url('/centre-for-research/mob-banner.png')] md:bg-[url('/centre-for-research/banner.png')]"></div>
      </div>

      {/* Mobile Banner - shown on small screens */}
      <div className="relative w-full h-screen overflow-hidden block md:hidden">
        <div className="">
          <img
            src="/centre-for-research/mob-banner.png"
            alt="EAT Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default HeroBanner
