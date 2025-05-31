import Image from "next/image"
import React from "react"

const Video = () => {
  return (
    <div className="w-full container mx-auto my-10 relative">
      <Image
        src="/campus/video.png"
        alt="Sustainability Banner"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/campus/play-button.png"
          width={135}
          height={108}
          alt="play button"
        />
      </div>
    </div>
  )
}

export default Video
