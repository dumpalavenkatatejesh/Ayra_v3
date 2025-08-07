import Image from "next/image"
import React from "react"

const Advisory = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 md:px-0">
        <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#002561]">
          THE AYRA RESEARCH ADVISORY <br className="hidden md:block" />{" "}
          COMMITTEE (RAC)
        </h1>

        <Image
          src="/centre-for-research/img03.png"
          width={1208}
          height={674}
          priority
          alt="centre for research"
          className="object-cover w-full mt-10"
        />

        <div className="mt-10 text-base md:text-lg text-black md:max-w-2xl md:ml-auto">
          <p>
            Guiding this ecosystem is the Research Advisory Committee (RAC),
            which shapes AYRA’s research and consultancy strategy. RAC ensures
            research is impactful, ethical, and aligned with our mission. It
            also nurtures partnerships across academia, industry, and civil
            society.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advisory
