import React from "react"
import Image from "next/image"
const ComingSoon = () => {
  return (
    <>
      {/* Coming Soon */}
      <div className="container mx-auto">
        <div className="flex justify-center items-center  md:px-3 md:pb-4 pb-5">
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
