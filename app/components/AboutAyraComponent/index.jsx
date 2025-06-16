import React from 'react'
import Banner from './Banner'
import OurMission from './OurMission'
import ScrollAnimation from './ScrollAnimation'
import AyraIsForTheStudent from './AyraIsForTheStudent'
import ScrollSectionMobile from './ScrollSectionMobile'
const index = () => {
  return (
    <div> 
        <Banner />
        <OurMission />
        <div className="hidden md:block">
        <ScrollAnimation />
        </div>
        <ScrollSectionMobile />
        <AyraIsForTheStudent />
    </div>
  )
}

export default index