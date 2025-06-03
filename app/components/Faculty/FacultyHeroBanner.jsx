import Image from "next/image"
import React from "react"
import Breadcrumbs from "../../utils/Breadcrumbs"

const FacultyHeroBanner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/faculty/faculty-banner.png"
            alt="Faculty"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/faculty/mob-banner.png"
            alt="Faculty"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto md:px-0 px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Faculty", href: "/about-us/faculty" },
          ]}
        />
      </div>

      <div className="container mx-auto py-5 md:pt-8 px-4 md:px-0">
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
