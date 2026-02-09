import Image from "next/image"
import React from "react"

const ForStudents = () => {
  const items = [
    "The Centre fosters active engagement from all stakeholders—students, faculty, staff, and the larger community. From on-campus initiatives to community-facing projects, we aim to create impact that’s visible, measurable, and scalable.",
    "Because at AYRA, sustainability is more than a subject. It’s a way of being.",
  ]

  return (
    <>
      <div className="relative w-full h-[500px] md:h-[600px] container mx-auto mb-10 hidden md:block">
        {/* Background Image */}
        <Image
          src="/centre-for-sustainability/for-students.png"
          alt="Design for Community & Comfort"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute bottom-10 left-4 right-4 md:right-20 md:left-auto flex justify-end items-center">
          <div className="text-white w-full md:max-w-[45%] p-4 md:p-0 rounded-md">
            <ul className="mt-2 md:mt-6 space-y-5 text-xl font-tthoves-extralight">
              {items.map((text, idx) => (
                <li className="text-large flex items-start gap-2" key={idx}>
                  <span className={idx === 1 ? "font-tthoves-medium" : ""}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10 bg-[url('/centre-for-sustainability/for-students-mobile.png')] bg-cover bg-center h-screen flex items-end md:hidden bg-[#2050B1]">
        <div className="flex items-center px-4 lg:pb-10 pb-2">
          <ul className=" space-y-3 text-lg font-tthoves-extralight text-white">
            {items.map((text, idx) => (
              <li className="flex items-start gap-2 -mt-64" key={idx}>
                <span className={idx === 1 ? "font-tthoves-medium" : ""}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-300" />
    </>
  )
}

export default ForStudents
