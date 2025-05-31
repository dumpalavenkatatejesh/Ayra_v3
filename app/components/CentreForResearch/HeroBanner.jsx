import React from "react"

const HeroBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
        <div className="absolute inset-0 bg-cover bg-[url('/centre-for-research/mob-banner.png')] md:bg-[url('/centre-for-research/banner.png')]"></div>
      </div>
    </>
  )
}

export default HeroBanner

// bg-[url('/centre-for-research/mob-banner.png')] md:bg-[url('/centre-for-research/banner.png')]
