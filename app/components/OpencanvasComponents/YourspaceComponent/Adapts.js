import React from "react"

const Banner = () => {
  return (
    <>
      <div className="bg-[url('/opencanvas/opc-img-01.jpg')] h-[90vh] bg-cover bg-center text-white relative lg:m-10">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left section - 70% on desktop */}
          <div className="w-full md:w-[60%] relative">
            {/* Optional left content */}
          </div>

          {/* Right section - 30% on desktop */}
          <div className="w-full md:w-[50%] flex items-end pb-10 md:pb-24">
            <div className="space-y-4 md:space-y-6 px-6 md:pr-[20%]">
              <p className="text-base md:text-[1.1vw] leading-relaxed font-light">
              At AYRA, we know that no two students are the same. That’s why we
            don’t shape you—you shape your own experience. Whether you need a
            quiet space to think, a lively hub to discuss ideas, or hands-on
            opportunities to create and innovate, we provide an environment that
            adapts to your learning style.
              </p>
              <p className="text-base md:text-[1.1vw] leading-relaxed font-light">
              Our classrooms, research spaces, and discussion areas are designed
            for collaboration, exploration, and growth, ensuring that you own
            your education in a way that’s meaningful to you. Here, you won’t
            just study—you’ll shape your future, one idea at a time.
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
