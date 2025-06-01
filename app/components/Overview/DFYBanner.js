import React from "react"

const DFYBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner for screens < md */}
      <div className="block md:hidden">
        <img
          src="/overview/Mobile-Banner.png"
          alt="Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner for md and up */}
      <div className="hidden md:block">
        <img
          src="/overview/distinct_banner.png"
          alt="Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default DFYBanner
