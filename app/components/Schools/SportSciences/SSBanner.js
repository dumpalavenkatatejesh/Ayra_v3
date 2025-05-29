import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"

const SSBanner = () => {
  return (
    <>
      {/* Responsive Banner Section */}
      <div className="relative h-[110vh] md:h-[90vh] w-full">
        <div className="absolute inset-0 bg-cover bg-center md:bg-[url('/schools/sports-and-sciences/sport-sciences-banner.png')] bg-[url('/schools/sports-and-sciences/sport-sciences-mobile.png')] ">
          <div className="absolute bottom-6 left-4 md:bottom-10 md:left-14">
            <CustomHoverButton
              text="Know More"
              bgColor="#FFCD62"
              textColor="#FFFFFF"
              foldColor="#E89401"
              foldBackground="#FFA300"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SSBanner
