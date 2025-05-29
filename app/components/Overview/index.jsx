import React from "react"
import DFYBanner from "./DFYBanner"
import DiscoverYourCampus from "./DiscoverYourCampus"
import StudentLife from "./StudentLife"
const index = () => {
  return (
    <>
      <DFYBanner />
      <div className="border-b border-dashed border-[#D5DEEC]">
        <DiscoverYourCampus />
      </div>
      <StudentLife />
    </>
  )
}

export default index
