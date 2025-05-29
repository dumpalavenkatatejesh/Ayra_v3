import React from "react"

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-you-img-04.jpg')] h-[90vh] bg-cover bg-center text-white relative lg:m-10">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left section - 70% on desktop */}
          <div className="w-full md:w-[60%] relative">
            {/* Optional left content */}
          </div>

          {/* Right section - 30% on desktop */}
          <div className="w-full md:w-[50%] flex items-end pb-10 md:pb-40">
            <div className="space-y-4 md:space-y-6 px-6 md:pr-[20%]">
              <p className="text-base md:text-[1.1vw] leading-relaxed font-light">
                At AYRA, your academic path isn’t predefined—it’s built by you.
                Whether you want to blend multiple disciplines, explore
                unconventional career paths, or specialise in an emerging field,
                you have the flexibility to create a curriculum that works for
                your goals.
              </p>
              <p className="text-base md:text-[1.1vw] leading-relaxed font-light">
                This is your education. You choose how to shape it.
              </p>
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent" />
      </div>
    </>
  )
}

export default Banner
