import React from "react"
import Image from "next/image"
import CustomHoverButton from "../../utils/CustomHoverButton"

const StudentLife = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-4 md:py-10 w-full flex flex-col md:flex-row  gap-10 md:h-[600px]">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <Image
            src="/overview/img2.png"
            alt="Campus Visual"
            width={700}
            height={1000}
            priority
            className=" h-full w-full"
          />
        </div>

        {/* Right Side Content */}
        <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4 md:pl-20">
          <div className="max-w-[500px]">
            <Image
              src="/overview/Student_Life.png"
              alt="Student Life"
              width={300}
              height={300}
              priority
            />
          </div>

          <h1 className="text-xl md:text-3xl font-tthoves-bold text-[#002561]">
            Your Life at AYRA
          </h1>

          <p className="text-sm md:text-base text-[#002561] mt-2 max-w-md">
            AYRA is where friendships spark, ideas grow, and every week brings
            something new. Dive into the energy of life beyond lectures.
          </p>

          <CustomHoverButton
            text="Start Living AYRA"
            bgColor="#66A4F9"
            textColor="#FFFFFF"
            foldColor="#3B76CB"
            foldBackground="#FFFFFF"
          />
        </div>
      </div>
    </>
  )
}

export default StudentLife
