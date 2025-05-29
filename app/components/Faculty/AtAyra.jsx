import React from "react"

const AtAyra = () => {
  return (
    <div className="my-5 flex flex-col items-center gap-3 px-4">
      <p className="text-xl sm:text-2xl md:text-3xl text-black text-center font-tthoves-medium">
        At AYRA, you’re not just taught—you’re seen, heard, and supported.
      </p>
      <div>
        <p className="text-sm sm:text-base text-black font-tthoves-extralight text-center max-w-3xl mb-4">
          Our faculty believe in potential, not perfection. And they’re here to
          help you unfold yours.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center mt-3">
          <button className="px-5 py-2 text-sm sm:text-base bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] hover:border-[#2050B1] transition-all duration-300 w-full sm:w-auto text-center">
            Explore Faculty by School
          </button>
          <button className="px-5 py-2 text-sm sm:text-base bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] hover:border-[#2050B1] transition-all duration-300 w-full sm:w-auto text-center">
            Discover Faculty-Led Projects
          </button>
          <button className="px-5 py-2 text-sm sm:text-base bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] hover:border-[#2050B1] transition-all duration-300 w-full sm:w-auto text-center">
            Meet Visiting Experts
          </button>
        </div>
      </div>
    </div>
  )
}

export default AtAyra
