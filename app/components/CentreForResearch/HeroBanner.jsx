import React from "react"

const HeroBanner = () => {
  return (
    <div className="h-[90vh] bg-cover flex items-end justify-end pb-5 md:pb-10 bg-[url('/centre-for-research/mob-banner.png')] md:bg-[url('/centre-for-research/banner.png')] relative">
      <div className="absolute inset-x-0 right-0 md:bottom-[4%] lg:bottom-[10%] 2xl:bottom-[13%] px-3 md:px-16 w-full md:max-w-[55%] lg:max-w-[50%] ml-auto">
        <p className="text-white text-xs xl:text-sm font-tthoves-extralight text-center md:text-left">
          At AYRA, we believe the most meaningful solutions come from the spaces
          between disciplines—where ideas connect, and innovation begins. Our
          research philosophy is rooted in multidisciplinary, interdisciplinary,
          and transdisciplinary thinking, engaging with complex challenges at
          local, national, and global levels. From reimagining wellness and
          sustainability to unlocking new possibilities in sport and energy,
          AYRA is where research meets relevance.
        </p>
      </div>
    </div>
  )
}

export default HeroBanner
