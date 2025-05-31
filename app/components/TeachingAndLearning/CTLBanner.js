import React from "react"

const CTLBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
        <div className="absolute inset-0 bg-cover md:bg-[url('/teaching-and-learning/CTL_Banner.png')] bg-[url('/teaching-and-learning/Mobile-Banner.png')]">
          <p className=" absolute text-white text-xs md:text-base rotate-[-12deg] md:rotate-[-12deg] font-tthoves-light max-w-xs md:max-w-md  md:top-[70%] top-[78%] md:left-[10%] left-[14%] ">
            Enabling Educators. Empowering Learners.
          </p>
        </div>
      </div>
    </>
  )
}

export default CTLBanner
