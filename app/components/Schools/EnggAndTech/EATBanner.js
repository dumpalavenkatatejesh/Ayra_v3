import React from "react"

const EATBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner - shown on small screens */}
      <div className="block md:hidden">
        <img
          src="/schools/engg_and_tech/Engg-Mobile-banner.png"
          alt="EAT Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner - shown on medium and larger screens */}
      <div className="hidden md:block">
        <img
          src="/schools/engg_and_tech/EngTechBanner.png"
          alt="EAT Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default EATBanner
