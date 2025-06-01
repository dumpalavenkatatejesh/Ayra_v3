import React from "react"

const SSBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner (shown on small screens) */}
      <div className="block md:hidden">
        <img
          src="/schools/sports-and-sciences/sport-sciences-mobile.png"
          alt="Sports and Sciences Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner (shown on medium and larger screens) */}
      <div className="hidden md:block">
        <img
          src="/schools/sports-and-sciences/sport-sciences-banner.png"
          alt="Sports and Sciences Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default SSBanner
