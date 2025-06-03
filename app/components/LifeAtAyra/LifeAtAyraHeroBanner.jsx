import Image from "next/image"
import React from "react"
import Breadcrumbs from "../../utils/Breadcrumbs"

const LifeAtAyraHeroBanner = () => {
  return (
    <>
      {/* <div className="relative h-[110vh] md:h-[90vh] w-screen md:w-full hidden md:block">
        
        <div className="absolute inset-0 bg-cover md:bg-[url('/life-at-ayra/student-life-banner.png')] bg-[url('/life-at-ayra/mob-banner.png')]"></div>
      </div>

      
      <div className="relative w-full h-screen md:h-[90vh] overflow-hidden block md:hidden">
        <div className="">
          <img
            src="/life-at-ayra/mob-banner.png"
            alt="EAT Mobile Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}

      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/life-at-ayra/student-life-banner.png"
            alt="Life At Ayra"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-[90vh]"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/life-at-ayra/mob-banner.png"
            alt="Life At Ayra"
            width={800}
            height={1000} // adjust as per your actual image ratio
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto md:px-0 px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Life At Ayra", href: "/distinct-for-you/life-at-ayra" },
          ]}
        />
      </div>
    </>
  )
}

export default LifeAtAyraHeroBanner
