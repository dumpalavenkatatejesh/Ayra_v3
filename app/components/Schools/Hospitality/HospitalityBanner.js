import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"

const HospitalityBanner = () => {
  return (
    <>
      {/* Banner section with relative positioning for button */}
      <div className="relative h-[110vh] md:h-[90vh] w-full">
        <div className="absolute inset-0 bg-cover bg-center md:bg-[url('/schools/hospitality/HospitalityBanner.png')] bg-[url('/schools/hospitality/MobileBanner.png')] ">
          <div className="absolute bottom-8 left-3 md:bottom-10 md:left-auto md:right-[22%]">
            <CustomHoverButton
              text="Know More"
              bgColor="#FF5EBB"
              textColor="#FFFFFF"
              foldColor="#F090CB"
              foldBackground="#FFBCDB"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HospitalityBanner
