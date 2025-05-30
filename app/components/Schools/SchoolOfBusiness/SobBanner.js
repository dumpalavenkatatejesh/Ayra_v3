import React from "react"
import CustomHoverButton from "../../../utils/CustomHoverButton"

const SobBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-full">
        <div className="absolute inset-0 bg-cover bg-center md:bg-[url('/schools/school-of-business/school-of-business.png')] bg-[url('/schools/school-of-business/business-mobile.png')] ">
          <div className="absolute left-4 md:left-[5%] bottom-6 md:top-[90%]">
            <CustomHoverButton
              text="Know More"
              bgColor="#2DCBFF"
              textColor="#FFFFFF"
              foldColor="#008AE8"
              foldBackground="#0098FF"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SobBanner
