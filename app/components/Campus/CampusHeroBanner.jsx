import React from "react"

const CampusHeroBanner = () => {
  return (
    <div className="h-[85vh] md:h-[90vh] bg-cover flex pb-5 md:pb-16 px-6 md:px-52 bg-[url('/campus/campus-mob-banner.png')] md:bg-[url('/campus/campus-banner.png')]">
      <div className="flex items-end max-w-3xl">
        <p className="text-xs md:text-lg text-white md:px-16">
          Whether you need a quiet corner to think, a dynamic hub to exchange
          ideas, or high-tech labs to bring your vision to life, every space at
          AYRA is built to support your journey.
        </p>
      </div>
    </div>
  )
}

export default CampusHeroBanner
