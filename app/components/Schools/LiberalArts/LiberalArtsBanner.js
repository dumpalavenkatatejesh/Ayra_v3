import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"
const LiberalArtsBanner = () => {
  return (
    <>
      <div>
        <div className="bg-[url('/schools/liberal-arts/liberal-arts-banner.png')] h-[90vh] bg-cover bg-center  relative">
          <div className="absolute right-4 sm:right-8 md:right-12 lg:right-[8%] top-[60%] sm:top-[65%] md:top-[68%] w-[90%] sm:w-[70%] md:w-[50%] lg:max-w-2xl">
            <p className="text-white text-base sm:text-base md:text-lg leading-relaxed rotate-[-6deg] sm:rotate-[-8deg] md:rotate-[-12deg]">
              Our programs are designed to help you think critically,
              communicate effectively, and engage with ideas across disciplines.
              Whether your interest lies in psychology, media, performance, or
              economics, you’ll find the space here to experiment, specialise,
              and shape a path that’s uniquely your own.
            </p>
          </div>

          <div className="absolute top-[90%] right-[5%]">
            <CustomHoverButton
              text="Know More"
              bgColor="#FF9E9F"
              textColor="#FFFFFF"
              foldColor="#EF8985"
              foldBackground="#FF4D48"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LiberalArtsBanner
