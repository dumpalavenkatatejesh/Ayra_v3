import React from "react"

const HeroBanner = () => {
  return (
    <div className="h-[90vh] bg-cover bg-center flex justify-end pb-5 md:pb-10 bg-[url('/centre-for-research/mob-banner.png')] md:bg-[url('/centre-for-research/banner.png')]">
      <div className="flex items-end w-full md:max-w-[50%] px-3 md:px-16">
        <p className="text-white text-xs md:text-base">
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
