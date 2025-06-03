"use client"

import React from "react"
import Slider from "react-slick"

const blocks = [
  {
    isText: true,
    title: "Learning as a Partnership",
    content:
      "Teaching at Ayra is grounded in dialogue, co-creation, and mentorship. Faculty are collaborators in your learning journey, not just instructors.",
  },
  {
    isText: false,
    image: "/admissions/masters_programs/what_set_us.png",
    alt: "Future Ready",
  },
  {
    isText: true,
    title: "Bridging Theory and Practice",
    content:
      "From corporate boardrooms to field research, our faculty bring diverse experiences into the classroom, making learning dynamic, applied, and relevant.",
  },
  {
    isText: false,
    image: "/admissions/masters_programs/what_set_us_1.png",
    alt: "Designed Around You",
  },
  {
    isText: true,
    title: "Interdisciplinary by Default",
    content:
      "You’ll find business professors collaborating with tech faculty, and artists working with data scientists. Because at Ayra, problems don’t come in silos—so neither should learning.",
  },
  {
    isText: false,
    image: "/admissions/masters_programs/what_set_us_1.png",
    alt: "Designed Around You",
  },
  {
    isText: true,
    title: "Always Evolving",
    content:
      "Our faculty are lifelong learners themselves. They continuously evolve their teaching practice to respond to new knowledge, technologies, and student needs.",
  },
]

const OurFacultyPhilosophyMobile = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 600,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="w-full bg-white flex flex-col items-center justify-start pt-10 px-4 mb-10">
      {/* Top Heading */}
      <h2 className="text-6xl font-schabo text-[#2050B1] leading-tight uppercase text-center mb-8">
        OUR FACULTY
        <br />
        PHILOSOPHY
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
                  <h3 className="text-lg font-bold text-[#2050B1] uppercase mb-3">
                    {block.title}
                  </h3>
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

export default OurFacultyPhilosophyMobile
