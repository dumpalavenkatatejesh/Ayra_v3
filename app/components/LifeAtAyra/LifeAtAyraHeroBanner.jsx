import Image from "next/image"
import React from "react"

const LifeAtAyraHeroBanner = () => {
  return (
    <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
      {/* Background Images */}
      <div className="absolute inset-0 bg-cover md:bg-[url('/life-at-ayra/student-life-banner.png')] bg-[url('/life-at-ayra/mob-banner.png')]"></div>
    </div>
  )
}

export default LifeAtAyraHeroBanner
