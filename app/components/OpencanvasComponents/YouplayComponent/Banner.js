import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div
        className=" h-[90vh] bg-cover bg-center text-white relative
         bg-[url('/opencanvas/opc-mob-play.png')]  // mobile background
         md:bg-[url('/opencanvas/opc-banner-you-play.jpg')] // desktop background"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[68%] lg:bottom-14">
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
          Beyond Academics, How Do You Want to Express Yourself?
          </p>
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
          At AYRA, education extends beyond the classroom. Your university
                experience isn’t just about what you learn—it’s about how you
                grow, compete, create, and lead. Whether you thrive on the
                field, on stage, or in student-led initiatives, AYRA gives you
                the space to push your limits, explore your passions, and shape
                a well-rounded university journey.
          </p>
        
        </div>
      </div>

      {/* Bottom Image Section */}
      {/* <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center relative px-4 sm:px-10 md:px-16 lg:px-20 ">
        <div className=" lg:w-[100vh] lg:h-[40vh] pt-10 pb-10 container mx-auto">
          <Image
            src="/opencanvas/opc-img-text.png"
            alt="Next Section"
            width={1500}
            height={1000}
            className="  container mx-auto "
          />
        </div>
      </div> */}
    </>
  )
}

export default Banner
