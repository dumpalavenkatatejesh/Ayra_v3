import React from "react"

const CTLBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src="/teaching-and-learning/Mobile-Banner.png"
          alt="CTL Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src="/teaching-and-learning/CTL-Banner.png"
          alt="CTL Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default CTLBanner
