import React from "react"
import LeadershipBanner from "./LeadershipBanner"
import Vision from "./Vision"
import Action from "./Action"
import ApproachAnimation from "./ApproachAnimation"
import AyraGuide from "./AyraGuide"
const index = () => {
  return (
    <>
      <LeadershipBanner />
      <AyraGuide />
      <div className="border-t border-dashed border-[#D5DEEC]">
        <ApproachAnimation />
      </div>
      <Vision />
      <Action />
    </>
  )
}

export default index
