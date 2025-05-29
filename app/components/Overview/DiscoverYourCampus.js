import React from "react"
import Image from "next/image"
import CustomHoverButton from "../../utils/CustomHoverButton"

const DiscoverYourCampus = () => {
  return (
    <>
      <div className="container mx-auto px-4 pt-10 md:pt-14 md:pb-6 w-full flex flex-col md:flex-row md:h-[500px]">
        {/* Left Side Content */}
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4">
          {/* Discover your Champs */}
          <Image
            src="/overview/Discover-Your-Campus.png"
            alt="Discover Your Campus"
            width={400}
            height={300}
            priority
            className="ml-[-12px]"
          />

          {/* Title */}
          <h1 className="text-xl md:text-3xl  text-[#002561] font-tthoves-bold">
            Step Inside AYRA
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-[#002561] max-w-md">
            Explore the classrooms, green learning nooks, play areas and
            everything in between. Every path, hallway, and hangout spot has a
            story. Discover the spaces that’ll soon feel like home.
          </p>

          {/* Button */}
          <CustomHoverButton
            text="Start the Tour"
            bgColor="#66A4F9"
            textColor="#FFFFFF"
            foldColor="#3B76CB"
            foldBackground="#FFFFFF"
          />
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2  pt-4 md:pt-0 pb-4 md:pb-0">
          <Image
            src="/overview/img1.png"
            alt="Campus Visual"
            width={700}
            height={1000}
            priority
            className="h-full w-full"
          />
        </div>
      </div>
    </>
  )
}

export default DiscoverYourCampus
