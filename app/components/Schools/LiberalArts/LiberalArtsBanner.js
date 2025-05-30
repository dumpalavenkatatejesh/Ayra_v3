import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"
const LiberalArtsBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-full">
        <div className=" absolute inset-0 bg-center bg-cover md:bg-[url('/schools/liberal-arts/liberal-arts-banner.png')] bg-[url('/schools/liberal-arts/arts-mobile.png')]">
          <div className="absolute top-[70%] px-4 md:px-0 md:top-[67%] md:max-w-2xl md:right-[8%]">
            <p className="text-white text-xs md:text-base   md:rotate-[-12deg] font-tthoves-light">
              Our programs are designed to help you think critically,
              communicate effectively, and engage with ideas across disciplines.
              Whether your interest lies in psychology, media, performance, or
              economics, you’ll find the space here to experiment, specialise,
              and shape a path that’s uniquely your own.
            </p>
          </div>

          <div className="absolute bottom-8 left-3 md:bottom-10 md:left-auto md:right-[5%]">
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
