import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div
        className="relative h-[100vh] lg:h-[90vh] bg-cover bg-center text-white
        bg-[url('/opencanvas/opc-mob-play.png')]
        md:bg-[url('/opencanvas/opc-banner-you-play.jpg')]"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div
          className="absolute bottom-6 lg:bottom-36 left-1/2 transform -translate-x-1/2
          text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[68%]"
        >
          <p
            className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90
            lg:text-base"
          >
            Beyond Academics, How Do You Want to Express Yourself?
          </p>
          <p
            className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90
            lg:text-base mt-10"
          >
            At AYRA, education extends beyond the classroom. Your university
            experience isn’t just about what you learn—it’s about how you grow,
            compete, create, and lead. Whether you thrive on the field, on
            stage, or in student-led initiatives, AYRA gives you the space to
            push your limits, explore your passions, and shape a well-rounded
            university journey.
          </p>
        </div>
      </div>
    </>
  )
}

export default Banner
