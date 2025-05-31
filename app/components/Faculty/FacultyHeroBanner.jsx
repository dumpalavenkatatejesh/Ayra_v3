import React from "react"

const FacultyHeroBanner = () => {
  return (
    <>
      <div className="bg-[url('/faculty/mob-banner.png')] md:bg-[url('/faculty/faculty-banner.png')] h-[80vh] md:h-[90vh] bg-cover"></div>
      <div className="container mx-auto py-5 md:pt-14 px-4 md:px-0">
        <h3 className="text-base md:text-xl text-black font-light w-full md:w-11/12 font-tthoves-extralight">
          At AYRA, our faculty are more than subject experts—they are inspiring
          coaches, dedicated to helping each student discover and unfold their
          potential. With backgrounds across academia, industry, research, and
          the creative arts, they bring real-world insight, interdisciplinary
          thinking, and a deep commitment to teaching into every classroom and
          studio.
        </h3>

        <h3 className="text-base md:text-xl text-black font-light w-full md:w-11/12 font-tthoves-extralight mt-4">
          You won’t find one-size-fits-all teaching here. AYRA faculty design
          experiences, not just syllabi. They encourage you to ask better
          questions, challenge assumptions, and connect ideas across
          disciplines. They guide, provoke, and walk alongside you as you build
          your own academic journey.
        </h3>
      </div>
    </>
  )
}

export default FacultyHeroBanner
