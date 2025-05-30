import React from "react"

const Ayraadapt = () => {
  return (
    <>
      <div className="lg:p-10 p-5">
      <div
        className=" h-[90vh] bg-cover bg-center text-white relative bg-[#002560] 
         bg-[url('/opencanvas/opc-choose-footer.png')]  // mobile background
         md:bg-[url('/opencanvas/opc-img02-choose.jpg')] // desktop background"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[74%] lg:bottom-32">
          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
            At AYRA, your academic path isn’t predefined—it’s built by you.
            Whether you want to blend multiple disciplines, explore
            unconventional career paths, or specialise in an emerging field, you
            have the flexibility to create a curriculum that works for your
            goals.
          </p>

          <p className="text-sm font-light text-start lg:w-2/3 mx-auto opacity-90 lg:text-base">
            This is your education. You choose how to shape it.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Ayraadapt
