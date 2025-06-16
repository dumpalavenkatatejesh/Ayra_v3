import React from "react"
import FacultyHeroBanner from "./FacultyHeroBanner"
import FacultyHighlights from "./FacultyHighlights"
import BeyondTheClassroom from "./BeyondTheClassroom"
import WhatOurStudentsCanExpect from "./WhatOurStudentsCanExpect"
import AtAyra from "./AtAyra"
import OurFacultyPhilosophy from "./OurFacultyPhilosophy"
import OurFacultyPhilosophyMobile from "./OurFacultyPhilosophyMobile"
import Faq from "./Faq"
const index = () => {
  return (
    <>
      <FacultyHeroBanner />
      <div className="hidden md:block">
        <OurFacultyPhilosophy />
      </div>
      <div className="block md:hidden">
        <OurFacultyPhilosophyMobile />
      </div> 
      <Faq />
      <FacultyHighlights />
      <BeyondTheClassroom />
      <WhatOurStudentsCanExpect />
      <AtAyra />

    </>
  )
}

export default index
