import React from "react"

const CTLBanner = () => {
  return (
    <>
      <div className="relative h-[90vh] md:h-[90vh] w-full ">
        <div className="absolute inset-0 bg-cover md:bg-[url('/teaching-and-learning/CTL_Banner.png')] bg-[url('/teaching-and-learning/Mobile-Banner.png')] ">
          <div className="absolute top-[81%] md:top-[70%] left-[10%] md:left-[9%]   max-w-xs md:max-w-md ">
            <p className="text-white text-xs md:text-base rotate-[-11deg] md:rotate-[-12deg] font-tthoves-light">
              Enabling Educators. Empowering Learners.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CTLBanner
