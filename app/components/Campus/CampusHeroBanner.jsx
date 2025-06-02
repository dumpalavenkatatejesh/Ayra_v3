import Image from "next/image"
import React from "react"
import Breadcrumbs from "../../utils/Breadcrumbs"

const CampusHeroBanner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/campus/campus-banner.png"
            alt="Campus"
            width={1920}
            height={1080}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <Image
            src="/campus/campus-mob-banner.png"
            alt="Campus"
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
            { label: "Campus", href: "/distinct-for-you/campus" },
          ]}
        />
      </div>
    </>
  )
}

export default CampusHeroBanner
