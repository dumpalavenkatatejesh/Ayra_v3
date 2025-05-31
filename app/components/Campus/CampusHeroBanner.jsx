import React from "react"

const CampusHeroBanner = () => {
  return (
    <>
      <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full">
        <div className="absolute inset-0 bg-cover bg-[url('/campus/campus-mob-banner.png')] md:bg-[url('/campus/campus-banner.png')]"></div>
      </div>
    </>
  )
}

export default CampusHeroBanner
