import React from "react"
import Breadcrumbs from "../../../utils/Breadcrumbs"
import Image from "next/image"
const Banner = () => {
  return (
    <>
      {/* Liberal Arts Banner */}
      <div className="relative w-full bg-[#2050B2]">

        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/schools/liberal-arts/liberal-arts-banner.png"
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
            src="/schools/liberal-arts/arts-mobile.png"
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
            { label: "Liberal Arts", href: "/schools/liberal-arts" },
          ]}
        />
      </div>
    </>
  )
}

export default Banner
