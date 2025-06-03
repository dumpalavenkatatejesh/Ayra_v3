import React from "react"
import LeadershipBanner from "./LeadershipBanner"
import Vision from "./Vision"
import Action from "./Action"
import ApproachAnimation from "./ApproachAnimation"
import AyraGuide from "./AyraGuide"
import ApproachAnimationMobile from "./ApproachAnimationMobile"
const index = () => {
  return (
    <>
      <LeadershipBanner />
      <AyraGuide />
      <ApproachAnimation />
      <ApproachAnimationMobile />
      <Vision />
      <Action />
    </>
  )
}

export default index
