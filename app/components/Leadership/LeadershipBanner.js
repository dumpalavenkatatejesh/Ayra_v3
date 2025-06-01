import React from "react"

const LeadershipBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src="/leadership/leadership-mobile-banner.png"
          alt="Leadership Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src="/leadership/Leadership_Banner.png"
          alt="Leadership Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default LeadershipBanner
