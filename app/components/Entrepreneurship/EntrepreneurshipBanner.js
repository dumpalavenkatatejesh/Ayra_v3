import Image from "next/image"
import React from "react"
import Breadcrumbs from "../../utils/Breadcrumbs"

const Banner = () => {
  return (
    <>
      <div className="relative w-full bg-[#2050B2]">
        {/* Desktop Image */}
        <div className="hidden md:block w-full">
          <Image
            src="/entrepreneurship/entrepreneurship.png "
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
            src="/entrepreneurship/Mobile-Banner.png "
            alt="Bachelor Program Mobile Banner"
            width={800}
            height={1000}
            className="object-cover object-center w-full h-auto"
            priority
          />
        </div>
      </div>
      
      <div className="container mx-auto md:px-0 px-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            {
              label: "Centre for Entrepreneurship",
              href: "/centres-for-excellence/centre-for-entrepreneurship",
            },
          ]}
        />
      </div>
    </>
  )
}

export default Banner
