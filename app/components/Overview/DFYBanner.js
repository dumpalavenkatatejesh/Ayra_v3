import React from "react"
const DFYBanner = () => {
  return (
    <>
      <div className="relative h-[100vh] md:h-[90vh] w-full ">
        <div className="absolute inset-0 bg-cover  md:bg-[url('/overview/distinct_banner.png')] bg-[url('/overview/Mobile-Banner.png')]">
          <div className="absolute top-[70%] md:top-[49%] px-3 md:px-0 my-14 md:my-0 md:left-[2%]">
            <p className="text-white text-xs md:text-base leading-relaxed md:max-w-md md:font-tthoves-extralight font-tthoves-light">
              At AYRA, education isn’t predefined. It’s shaped by your
              ambitions, your pace, and your vision for the future. Whether you
              want to dive deep into a specialisation, blend disciplines,
              fast-track your learning, or explore at your rhythm, AYRA gives
              you the freedom to design your path.
            </p>
            <p className="text-white text-xs md:text-base leading-relaxed max-w-[380px] mt-5 md:font-tthoves-extralight font-tthoves-light">
              This is learning that moves with you, evolves with you, and adapts
              to you.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default DFYBanner
