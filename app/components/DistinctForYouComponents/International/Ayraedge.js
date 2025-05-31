import React from "react"
import Image from "next/image"

const Ayraedge = () => {
  return (
    <>
      <div className=" w-full bg-[#002562] py-10">
        <div className="flex justify-center max-w-5xl mx-auto my-10 px-4 md:px-0 ">
          <Image
            src="/international/Ayra-Edge.png"
            alt="Discover Your international"
            width={500}
            height={339}
          />
        </div>

        <div className="flex flex-col justify-center items-center px-4 md:px-0 max-w-5xl mx-auto text-center">
          <p className="text-base md:text-lg py-4 font-light text-white">
            At AYRA, internationalisation is not an add-on—it’s an essential
            part of how we prepare students for life, leadership, and learning
            in a globalised world. Guided by our open canvas philosophy, the
            International Centre creates pathways that are as ambitious and
            individual as each student we serve.
          </p>

          <h1 className="text-xl md:text-3xl font-bold py-2 max-w-3xl text-white">
            Wherever you want to go, your journey can start here—with us.
          </h1>

          <div className="flex flex-wrap justify-center gap-4 py-6">
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300 bg-white">
              Explore International Programs
            </button>
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#2050B1] border border-dashed border-[#707070] group-hover:border-[#2050B1] overflow-hidden cursor-pointer transition-all duration-300 bg-white">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ayraedge
