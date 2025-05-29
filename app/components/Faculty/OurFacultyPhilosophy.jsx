import Image from "next/image"
import React from "react"

const OurFacultyPhilosophy = () => {
  return (
    <div className="mb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:pl-16 gap-6 md:gap-0">
        <h1 className="text-4xl md:text-8xl font-schabo text-[#2050B1] tracking-wide text-center md:text-left leading-tight">
          OUR FACULTY <br className="hidden md:block" /> PHILOSOPHY
        </h1>

        <Image
          src="/faculty/our-faculty-philosophy.png"
          width={500}
          height={400}
          alt="our faculty philosophy"
          className="w-full max-w-sm md:max-w-none md:w-auto"
        />
      </div>
    </div>
  )
}

export default OurFacultyPhilosophy
