import React from "react"

const EntrepreneurshipBanner = () => {
  return (
    <>
      <div className="relative h-[100vh] md:h-[90vh] w-full">
        <div className="absolute inset-0 bg-cover md:bg-[url('/entrepreneurship/entrepreneurship.png')] bg-[url('/entrepreneurship/Mobile-Banner.png')] ">
          <div className="absolute top-[84%] px-5 md:px-0 md:top-[70%] md:right-[5%] max-w-sm md:max-w-lg text-white">
            <p className="  text-xs md:text-base font-tthoves-light ">
              The Centre for Entrepreneurship at AYRA is where ambition meets
              action. Whether you’re a student with a big idea or someone
              curious about creating change, this is your launchpad.
            </p>
            <p className=" text-xs md:text-base font-tthoves-light">
              Here, entrepreneurship is not a subject—it’s a way of thinking,
              problem-solving, and building the future.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default EntrepreneurshipBanner
