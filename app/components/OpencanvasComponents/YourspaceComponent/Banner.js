import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div
        className="  h-[100vh] lg:h-[90vh] bg-cover bg-center text-white relative
         bg-[url('/opencanvas/opc-mob-space.png')]  // mobile background
         md:bg-[url('/opencanvas/opc-banner-spc-img.png')] // desktop background"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[68%] lg:bottom-14">
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
            Your next few years with AYRA will shape the way you think, create,
            and explore. What do you want those years to look like? What kind of
            space do you need to grow, question, and evolve?
          </p>
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
            How will you shape it?
          </p>
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
            Take a moment. What future will you create?
          </p>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 border-b-2 border-dotted border-gray-400">
        <div className="container mx-auto w-full h-full  pt-10 pb-10">
          <Image
            src="/opencanvas/opc-img-duck.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="lg:w-full  lg:h-full w-[100vh] h-[20vh] "
          />
        </div>
      </div>
    </>
  )
}

export default Banner
