import React from "react"

const Banner = () => {
  return (
    <>
     <div className="lg:p-10 p-5">
      <div
        className=" h-[90vh] bg-cover bg-center text-white relative bg-[#002560]
         bg-[url('/opencanvas/opc-img-space-footer.png')]  // mobile background
         md:bg-[url('/opencanvas/opc-img-01.jpg')] // desktop background"
      >
        {/* Responsive Centered Paragraphs at Bottom */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-center px-4 w-[90%] sm:w-4/5 md:w-3/4 lg:w-1/2 lg:left-[74%] lg:bottom-14">
          <p className="text-sm font-light text-start lg:w-[500px] w-[300px] mx-auto opacity-90 lg:text-base">
            At AYRA, we know that no two students are the same. That’s why we
            don’t shape you—you shape your own experience. Whether you need a
            quiet space to think, a lively hub to discuss ideas, or hands-on
            opportunities to create and innovate, we provide an environment that
            adapts to your learning style.
          </p>

          <p className="text-sm font-light text-start lg:w-[500px] mx-auto opacity-90 lg:text-base">
            Our classrooms, research spaces, and discussion areas are designed
            for collaboration, exploration, and growth, ensuring that you own
            your education in a way that’s meaningful to you. Here, you won’t
            just study—you’ll shape your future, one idea at a time.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default Banner
