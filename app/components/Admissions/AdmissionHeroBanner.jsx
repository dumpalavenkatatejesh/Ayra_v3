import { HoverButton5 } from "@/app/utils/HoverButton"
import React from "react"

const AdmissionHeroBanner = () => {
  return (
    <div className="h-[90vh] bg-cover bg-center flex pb-10 px-3 md:px-10 relative bg-[url('/admissions/admission-mob-banner.png')] md:bg-[url('/admissions/admission-banner.png')]">
      {/* Desktop Slanted Text */}
      <div className="absolute inset-0 top-[42%] left-[30%] md:left-[17%] flex items-center max-w-[300px] md:max-w-[400px]">
        <p className="text-xs md:text-lg text-white -rotate-[27deg] md:-rotate-[13deg]">
          Join a community where your aspirations take centre stage. Admissions
          are now open for the upcoming academic year
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-end gap-3 mt-auto">
        <div className="group inline-block">
          <button className="relative text-xs md:text-base px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
            Know More
            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#2050B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </button>
        </div>

        <div className="group inline-block">
          <button className="relative text-xs md:text-base px-5 py-1 bg-[#9B64FF] group-hover:bg-[#ab7dff] text-white overflow-hidden cursor-pointer transition-colors duration-300">
            Contact Admissions Team
            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#2050B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#ffffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdmissionHeroBanner
