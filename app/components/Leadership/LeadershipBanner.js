import React from "react"

const LeadershipBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
        <div className="absolute inset-0 bg-cover bg-[url('/leadership/leadership-mobile-banner.png')] md:bg-[url('/leadership/Leadership_Banner.png')]">
          <p className="absolute left-[20%] top-[86%] md:left-[15%] md:top-[78%] px-4 md:px-0 max-w-[80%] md:max-w-md text-white text-xs sm:text-sm md:text-base leading-relaxed rotate-[-11deg] font-tthoves-extralight">
            Visionaries. Builders. Catalysts of Change.
          </p>
        </div>
      </div>
    </>
  )
}

export default LeadershipBanner
