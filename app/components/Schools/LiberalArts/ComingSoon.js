import React from "react"
import Image from "next/image"
const ComingSoon = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Coming soon image below banner  MobileBanner.png */}
        <div className="flex justify-center items-center md:px-3 md:py-4 py-10">
          <Image
            src="/schools/liberal-arts/coming_soon.png"
            alt="School of Business Banner"
            width={1200}
            height={400}
            priority
          />
        </div>
      </div>
    </>
  )
}

export default ComingSoon
