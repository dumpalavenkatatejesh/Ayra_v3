import Image from "next/image"
import React from "react"

const futureReadyData = [
  {
    id: 1,
    title: "SMART CLASSROOMS",
    description: "with circular seating for <br /> deeper engagement",
    image: "/campus/future-ready/img01.png",
  },
  {
    id: 2,
    title: "24/7 LEARNING ZONE",
    description: "and co-working spaces for <br /> limitless exploration",
    image: "/campus/future-ready/img02.png",
  },
  {
    id: 3,
    title: "THINKING NOOKS",
    description: "discussion lounges, and <br /> industry-integrated labs",
    image: "/campus/future-ready/img03.png",
  },
]

const FutureReadyLearning = () => {
  return (
    <div className="pt-0 md:pt-10 pb-5 container mx-auto px-4 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-tthoves-demibold text-[#002561] text-center md:text-left">
        FUTURE-READY LEARNING SPACES
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {futureReadyData.map((item) => (
          <li key={item.id}>
            <div className="relative overflow-hidden shadow-lg">
              <Image
                src={item.image}
                width={450}
                height={700}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-5 w-full p-4 leading-tight space-y-2">
                <h2 className="text-5xl sm:text-6xl text-[#006CEB] font-schabo tracking-wide">
                  {item.title}
                </h2>
                <p
                  className="text-base lg:text-2xl text-white font-tthoves-extralight"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FutureReadyLearning
