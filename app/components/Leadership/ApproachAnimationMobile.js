"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const blocks = [
  {
    isText: true,
    title: "STUDENT-CENTRIC <br/> THINKING",
    content:
      "Every decision is filtered through one lens: what’s best for the learner. From curriculum design to campus life, our leadership ensures that student agency and wellbeing remain central.",
  },
  {
    isText: false,
    image: "/admissions/masters_programs/what_set_us.png",
    alt: "ACADEMIC EXCELLENCE, REINVENTED",
  },
  {
    isText: true,
    title: "ACADEMIC EXCELLENCE, <br/> REINVENTED",
    content:
      "We uphold rigorous academic standards while questioning outdated models. Our leaders bring progressive pedagogy, future-focused frameworks, and global best practices to the table.",
  },
  {
    isText: false,
    image: "/leadership/img2.png",
    content: "Designed Around You",
  },
  {
    isText: true,
    title: "COLLABORATION ACROSS <br/> BORDERS",
    content:
      "Our leadership cultivates relationships with leading universities, industries, and policy bodies—ensuring Ayra remains connected, relevant, and globally engaged.",
  },
]

const TextSectionMobile = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-full bg-white md:hidden flex flex-col items-center justify-start pt-10 px-4 mb-10">
      {/* Top Heading */}
      <h2 className="text-6xl font-schabo text-[#2050B1] leading-tight uppercase text-center mb-8">
        WHAT GUIDES OUR <br /> LEADERSHIP <br /> APPROACH
      </h2>

      {/* Slider */}
      <div className="w-full">
        <Slider {...settings}>
          {blocks.map((block, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-full px-6"
            >
              {block.isText ? (
                <div className="flex flex-col items-center justify-center text-center max-w-md my-12">
                  <h3
                    className="text-2xl md:text-3xl  text-[#2050B1] mb-2 md:mb-4 uppercase font-tthoves-bold"
                    dangerouslySetInnerHTML={{ __html: block.title }}
                  ></h3>
                  <p className="text-gray-700 text-sm">{block.content}</p>
                </div>
              ) : (
                <img
                  src={block.image}
                  alt={block.alt}
                  className="max-h-[60vh] w-auto object-contain"
                />
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default TextSectionMobile
