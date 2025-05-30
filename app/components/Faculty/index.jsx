import React from "react"
import FacultyHeroBanner from "./FacultyHeroBanner"
import FacultyHighlights from "./FacultyHighlights"
import BeyondTheClassroom from "./BeyondTheClassroom"
import WhatOurStudentsCanExpect from "./WhatOurStudentsCanExpect"
import AtAyra from "./AtAyra"
import OurFacultyPhilosophy from "./OurFacultyPhilosophy"

const index = () => {
  return (
    <>
      <FacultyHeroBanner />
      <OurFacultyPhilosophy />
      <FacultyHighlights />
      <BeyondTheClassroom />
      <WhatOurStudentsCanExpect />
      <AtAyra />
    </>
  )
}

export default index
