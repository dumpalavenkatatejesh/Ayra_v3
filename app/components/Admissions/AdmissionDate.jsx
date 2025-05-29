import Image from "next/image"
import React from "react"

const AdmissionDate = () => {
  const items = [
    {
      imageUrl: "/admissions/26.png",
      month: "MARCH",
      title: "Application Open",
    },
    {
      imageUrl: "/admissions/10.png",
      month: "APRIL",
      title: "Early Decision Deadline",
    },
    {
      imageUrl: "/admissions/10.png",
      month: "MAY",
      title: "Regular Decision Deadline",
    },
  ]

  return (
    <div className="bg-[#002561] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white p-6"
          >
            <div className="relative">
              <Image
                src={item.imageUrl}
                width={135}
                height={150}
                alt={item.month}
                className="w-[125px] h-[150px]"
              />
              <span className="absolute inset-0 flex items-center font-tthoves-medium">
                {item.month}
              </span>
            </div>
            <h3 className="text-lg mt-6 font-tthoves-extralight">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdmissionDate
