

import React from "react"

const Ayraadapts = () => {
  return (
    <>
        <div className="lg:p-10 p-5">
      <div
        className=" h-[90vh] bg-cover bg-center text-white relative bg-[#002560]
         bg-[url('/opencanvas/opc-pace-footer.png')]  // mobile background
         md:bg-[url('/opencanvas/opc-img02-pace.jpg')] // desktop background"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[74%] lg:bottom-20">
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
          Learning at AYRA is designed to be as dynamic as you are. Whether
            you want to fast-track your degree, earn industry certifications, or
            take the time to explore multiple disciplines, your journey is yours
            to shape. With multiple exit points, entrepreneurial incubators, and
            experiential learning opportunities, we ensure that education adapts
            to you, not the other way around.
          </p>

          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
          This is your education. At your pace. In your way.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Ayraadapts

