import React from "react"

const EATBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] bg-cover bg-center md:h-[90vh] w-screen md:w-full md:bg-[url('/schools/engg_and_tech/EngTechBanner.png')] bg-[url('/schools/engg_and_tech/Engg-Mobile-banner.png')]">
        <div className="absolute inset-0 flex items-end justify-start px-[10vw] md:px-[30vw] pb-[34vh] md:pb-[26vh] ">
          {/* Rotated text with responsive positioning */}
          <p className=" text-white text-sm md:text-base max-w-s md:max-w-md rotate-[20deg] md:rotate-[-12deg]  font-tthoves-light ">
            A Launchpad for Future Innovators
          </p>
        </div>
      </div>
    </>
  )
}

export default EATBanner
