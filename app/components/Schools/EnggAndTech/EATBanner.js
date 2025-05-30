import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"

const EATBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
        <div className="absolute inset-0  bg-cover md:bg-[url('/schools/engg_and_tech/EngTechBanner.png')] bg-[url('/schools/engg_and_tech/Engg-Mobile-banner.png')]">
          {/* Rotated text with responsive positioning */}
          <p className="absolute text-white text-sm md:text-base max-w-s md:max-w-md rotate-[20deg] md:rotate-[-12deg] top-[64%] md:top-[67%] left-6 md:left-[28%] font-tthoves-light ">
            A Launchpad for Future Innovators
          </p>

          {/* Button with responsive position */}
          <div className="absolute bottom-6 md:top-[85%] left-4 md:left-[11%]">
            <CustomHoverButton
              text="Know More"
              bgColor="#744AC6"
              textColor="#FFFFFF"
              foldColor="#9166F6"
              foldBackground="#B073FF"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default EATBanner
