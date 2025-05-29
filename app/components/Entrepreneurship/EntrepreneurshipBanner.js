import React from "react"

const EntrepreneurshipBanner = () => {
  return (
    <>
      <div className="relative bg-[url('/entrepreneurship/entrepreneurship.png')] bg-cover bg-center h-[90vh]">
        <div className="absolute top-[70%] right-[5%] max-w-xs md:max-w-lg text-white">
          <p className=" text-sm md:text-base leading-relaxed">
            The Centre for Entrepreneurship at AYRA is where ambition meets
            action. Whether you’re a student with a big idea or someone curious
            about creating change, this is your launchpad.
          </p>
          <p>
            Here, entrepreneurship is not a subject—it’s a way of thinking,
            problem-solving, and building the future.
          </p>
        </div>
      </div>
    </>
  )
}

export default EntrepreneurshipBanner
