"use client"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewsAndEventData = [
  {
    id: 1,
    title: "B.TECH IN COMPUTER SCIENCE & ENGINEERING (CSE)",
    image: "/admissions/academic-programs/img4.webp",
    duration: "4 years",
    seats: "60 per batch",
    description:
      "A strong foundation in computing and systems thinking program designed to help you build, problem-solve, and create with clarity and purpose.",
  },
  {
    id: 2,
    title: "B.TECH IN ARTIFICIAL INTELLIGENCE & MACHINE LEARNING (AIML)",
    image: "/admissions/academic-programs/img5.webp",
    duration: "4 years",
    seats: "60 per batch",
    description:
      "A future-facing program focused on intelligent systems and data-driven technologies program helping you understand not just how machines learn, but how they shape the world.",
  },
  {
    id: 3,
    title: "B.TECH IN DATA SCIENCE (DS)",
    image: "/admissions/academic-programs/img6.webp",
    duration: "4 years",
    seats: "60 per batch",
    description:
      "A program that helps you uncover meaning in data program learning how to analyse, interpret, and apply insights across domains and industries.",
  },
]

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
      },
    },
  ],
}

const NewsAndEvents = () => {
  return (
    <>
      {/* Top Section */}
      <div className="w-full flex flex-col justify-center items-center">
        <div className="container flex flex-col gap-10">
          <div className="flex flex-col items-center px-4">
            <div className="container mx-auto  lg:border-l lg:border-r border-dashed border-[#000000] flex items-center justify-center flex-col  text-left">
              <p className="text-left lg:w-2/3 pt-4 ">
                At AYRA, programs are not fixed paths you must follow. They are
                starting points you can shape.
              </p>

              <p className="text-left lg:w-2/3">
                Every program is designed as an open canvas: structured enough
                to guide you, flexible enough to adapt to you. You don&apos;t
                just study a subject here. You unfold your potential through it,
                at your pace, in your way, across disciplines, experiences, and
                choices.
              </p>
              <p className="text-left lg:w-2/3">
                Whether you begin with engineering, business, sport, or design,
                AYRA adapts to you as you grow, supporting your academic
                direction, your personal development, and your future
                aspirations together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:border-b border-t md:border-dashed md:border-black  py-5  ">
        <div className="flex flex-col justify-center items-center md:flex-row  container mx-auto px-4">
          <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start justify-start ">
            <Image
              src="/admissions/academic-programs/school.webp"
              alt="news and events"
              width={350}
              height={370}
              className="w-full h-auto p-4 max-w-[300px] "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center lg:items-center px-4 md:px-0">
            <h2 className="carousel-heading-desktop font-bold text-black font-tthoves-bold w-full md:w-[85%] text-left">
              Build what the future needs. Shape how you think.
            </h2>
            <p className="text-black font-tthoves-light w-full md:w-[85%] pt-5  text-left">
              Engineering at AYRA is about learning how to build, but also how
              to question, imagine, and design responsibly. You gain strong
              technical foundations while being encouraged to explore how
              technology connects with people, systems, and society
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className=" py-10">
        <div className="container mx-auto px-4">
          {/* Mobile: Carousel */}
          <div className="block md:hidden">
            <Slider {...sliderSettings}>
              {NewsAndEventData.map((item) => (
                <div key={item.id} className="px-2">
                  <div className="relative overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      width={450}
                      height={700}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-10 w-full p-4 leading-tight space-y-2">
                      <h2 className=" carousel-heading-desktop font-schabo text-white text-end">
                        {item.title}
                      </h2>
                      {item.duration && (
                        <p className="text-white text-end mt-2">
                          Duration : {item.duration}
                        </p>
                      )}
                      {item.seats && (
                        <p className="text-white text-end">
                          Seats : {item.seats}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.description && (
                    <p className="text-black mt-4 px-2">{item.description}</p>
                  )}
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6  ">
            {NewsAndEventData.map((item) => (
              <div key={item.id}>
                <div className="relative overflow-hidden shadow-lg">
                  <Image
                    src={item.image}
                    width={450}
                    height={700}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-10 w-full p-4 leading-tight space-y-2">
                    <h2 className="carousel-heading-desktop font-schabo text-white text-end h-40">
                      {item.title}
                    </h2>
                    {item.duration && (
                      <p className="text-white text-end mt-2">
                        Duration : {item.duration}
                      </p>
                    )}
                    {item.seats && (
                      <p className="text-white text-end">
                        Seats : {item.seats}
                      </p>
                    )}
                  </div>
                </div>
                {item.description && (
                  <p className="text-black mt-4">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsAndEvents
