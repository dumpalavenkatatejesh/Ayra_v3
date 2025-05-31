import Image from "next/image"
import React from "react"

const LifeAtAyraHeroBanner = () => {
  return (
    <div className="relative h-[90vh] w-full pb-16 px-6 md:px-52">
      {/* Background Images */}
      <div className="absolute inset-0 bg-cover md:bg-[url('/life-at-ayra/student-life-banner.png')] bg-[url('/life-at-ayra/mob-banner.png')]"></div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10">
        {/* Slanted Caption for Desktop (large screens only) */}
        <div className="hidden md:block absolute left-[27%] bottom-[18%]">
          <p className="text-sm md:text-base xl:text-lg text-white -rotate-[13deg] font-tthoves-regular">
            Beyond the Classroom, Into Possibility
          </p>
        </div>

        {/* Mobile: bottom-left caption */}
        <div className="absolute bottom-3 left-4 md:hidden text-white font-tthoves-regular">
          <p className="text-sm">Beyond the Classroom, Into Possibility</p>
          <p className="text-xs mt-2 max-w-[90%]">
            At AYRA, your experience isn’t just about academics—it’s about the
            spaces you explore, the connections you make, and the passions you
            pursue. Whether you’re looking for a quiet corner to reflect, a
            dynamic space to collaborate, or a place to challenge yourself
            physically and creatively, AYRA gives you the freedom to shape your
            student life, your way.
          </p>
        </div>

        {/* Main Description for Desktop */}
        <div className="hidden md:block absolute inset-x-0 right-0 md:bottom-[4%] lg:bottom-[8%] 2xl:bottom-[13%] px-3 md:px-16 w-full md:max-w-[55%] lg:max-w-[50%] ml-auto">
          <p className="text-white text-xs xl:text-sm font-tthoves-extralight">
            At AYRA, your experience isn’t just about academics—it’s about the
            spaces you explore, the connections you make, and the passions you
            pursue. Whether you’re looking for a quiet corner to reflect, a
            dynamic space to collaborate, or a place to challenge yourself
            physically and creatively, AYRA gives you the freedom to shape your
            student life, your way.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LifeAtAyraHeroBanner
