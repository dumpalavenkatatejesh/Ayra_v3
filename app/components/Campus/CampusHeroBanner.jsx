import React from "react"

const CampusHeroBanner = () => {
  return (
    <div className="relative h-[85vh] md:h-[90vh] bg-cover bg-[url('/campus/mob-banner.png')] md:bg-[url('/campus/campus-banner.png')] px-6 md:px-52">
      <div className="absolute inset-x-0 md:bottom-[6%] lg:bottom-[10%] xl:bottom-[11%] mx-auto md:max-w-[40%] lg:max-w-[35%]">
        <p className="text-xs md:text-base text-white font-tthoves-regular text-center md:text-left">
          Whether you need a quiet corner to think, a dynamic hub to exchange
          ideas, or high-tech labs to bring your vision to life, every space at
          AYRA is built to support your journey.
        </p>
      </div>
    </div>
  )
}

export default CampusHeroBanner
