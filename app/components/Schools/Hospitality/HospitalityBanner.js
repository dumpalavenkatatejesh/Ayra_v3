import React from "react"
import Breadcrumbs from "../../../utils/Breadcrumbs"
import Image from "next/image"
const HospitalityBanner = () => {
  return (
    <>
      {/* Hospitality Banner */}
      <div className="relative w-full bg-[#2050B2]">

        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/schools/hospitality/HospitalityBanner.png"
            alt="Bachelor Program Desktop Banner"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/schools/hospitality/MobileBanner.png"
            alt="Bachelor Program Mobile Banner"
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="container mx-auto md:px-0 px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Hospitality", href: "/schools/hospitality" },
          ]}
        />
      </div>
    </>
  )
}

export default HospitalityBanner
