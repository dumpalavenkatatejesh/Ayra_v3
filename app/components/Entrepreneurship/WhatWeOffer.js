import React from "react"
import Image from "next/image"
const WhatWeOffer = () => {
  const items = [
    {
      title: "Startup <br /> Incubation",
      description:
        "Support for student-led ventures with mentorship, workspace, and access to early-stage capital.",
    },
    {
      title: "Workshops & Bootcamps",
      description:
        "Hands-on learning in design thinking, product development, pitching, business model innovation, and more.",
    },
    {
      title: "Mentor <br /> Network",
      description:
        "Direct access to founders, investors, and industry leaders who’ve walked the path.",
    },
    {
      title: "Cross-Disciplinary Collaboration",
      description:
        "Ideas flourish at the intersection of disciplines—connect with peers from engineering, liberal arts, hospitality, business, and sports to co-create impactful solutions.",
    },
    {
      title: "Pitch Days & Demo Events",
      description:
        "Regular opportunities to showcase your startup ideas to investors, experts, and industry stakeholders.",
    },
  ]
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full py-8 px-4 md:px-14">
          {/* What We Offer */}
          <div className="pb-8 flex justify-center items-center">
            <Image
              src="/entrepreneurship/wwo.png"
              alt="What We Offer"
              width={600}
              height={400}
              priority
            />
          </div>

          {/* Image */}
          <div>
            <Image
              src="/entrepreneurship/img1.png"
              alt="What We Offer Image 1"
              width={1200}
              height={600}
              className="w-full"
              priority
            />
          </div>

          {/* Points */}
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-dashed divide-[#4FA6FF]">
              {items.map((item, index) => (
                <div key={index} className="px-4 py-4">
                  <h1
                    className="text-base md:text-2xl text-[#2050B1] font-tthoves-bold"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></h1>
                  <p className="text-sm mt-2 font-tthoves-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] md:h-[560px] ">
            {/* Background image */}
            <Image
              src="/entrepreneurship/img2.png"
              alt="Discover Your Campus"
              width={1200}
              height={600}
              className="w-full h-full"
              priority
            />

            {/* Overlay text */}
            <div className="absolute md:right-10 bottom-28  flex justify-end items-center ">
              <div className="text-white md:max-w-[42%] space-y-4">
                <p className="font-tthoves-extralight text-xs md:text-base">
                  We’re not only building founders—we’re shaping entrepreneurial
                  mindsets. From entrepreneurs driving innovation within
                  organisations to change-makers solving local and global
                  challenges, the Centre empowers students to take initiative
                  and lead with purpose.
                </p>
                <p className="font-tthoves-extralight text-xs md:text-base">
                  If you’re ready to imagine boldly, solve creatively, and build
                  fearlessly, the Centre for Entrepreneurship is your starting
                  point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeOffer
