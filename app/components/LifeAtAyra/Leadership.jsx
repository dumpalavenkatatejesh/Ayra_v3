import { HoverButton3 } from "@/app/utils/HoverButton"
import Image from "next/image"
import React from "react"

const Leadership = () => {
  return (
    <>
      {/* Large Screen Layout */}
      <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] container mx-auto my-10 hidden md:block">
        {/* Background Image */}
        <Image
          src="/life-at-ayra/leadership.png"
          alt="Leadership & Entrepreneurship Clubs"
          fill
          className="object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 top-48 right-40 flex justify-end items-center">
          <div className="text-white max-w-[40%]">
            <div className="space-y-5">
              <h3 className="text-3xl text-white font-tthoves-demibold">
                Develop skills, organise events, and make an impact.
              </h3>
              <p className="text-lg font-light text-white font-tthoves-extralight">
                This is Your Space. Embrace It.
              </p>
              <div className="group inline-block">
                <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                  Explore Clubs
                  <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="my-10 bg-[url('/life-at-ayra/leadership-mob.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#002561]">
        <div className="flex items-center px-4 pb-20">
          <div className="text-white">
            <div className="space-y-5">
              <h3 className="text-2xl text-white font-tthoves-demibold">
                Develop skills, organise events, and make an impact.
              </h3>
              <p className=" font-light text-white font-tthoves-extralight">
                This is Your Space. Embrace It.
              </p>
              <div className="group inline-block">
                <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                  Explore Clubs
                  <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Leadership
