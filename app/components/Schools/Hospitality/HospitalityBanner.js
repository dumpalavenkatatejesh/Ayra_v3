import React from "react"

const HospitalityBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner (visible on small screens only) */}
      <div className="block md:hidden">
        <img
          src="/schools/hospitality/MobileBanner.png"
          alt="Hospitality Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner (visible on medium and larger screens) */}
      <div className="hidden md:block">
        <img
          src="/schools/hospitality/HospitalityBanner.png"
          alt="Hospitality Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default HospitalityBanner
