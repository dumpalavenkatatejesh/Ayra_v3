import React from "react"

const Banner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner */}
      <div className="block md:hidden">
        <img
          src="/entrepreneurship/Mobile-Banner.png"
          alt="Entrepreneurship Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src="/entrepreneurship/entrepreneurship.png"
          alt="Entrepreneurship Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

export default Banner
