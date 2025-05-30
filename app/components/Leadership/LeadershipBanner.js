import React from "react"

const LeadershipBanner = () => {
  return (
    <>
      <div className="h-screen md:h-[90vh] bg-cover bg-[url('/leadership/leadership-mobile-banner.png')] md:bg-[url('/leadership/Leadership_Banner.png')] relative">
        {/* Overlayed Rotated Text */}
        <div className="absolute left-[20%] top-[86%] md:left-[15%] md:top-[78%] px-4 md:px-0 max-w-[80%] md:max-w-md">
          <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed rotate-[-11deg] font-tthoves-extralight">
            Visionaries. Builders. Catalysts of Change.
          </p>
        </div>
      </div>
    </>
  )
}

export default LeadershipBanner
