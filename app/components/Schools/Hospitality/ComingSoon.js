import React from "react"
import Image from "next/image"
const ComingSoon = () => {
  return (
    <>
      {/* Coming Soon */}
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <Image
            src="/schools/hospitality/coming_soon.png"
            alt="School of Business Banner"
            width={1200}
            height={400}
            className="w-full max-w-[1200px] h-auto"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default ComingSoon
