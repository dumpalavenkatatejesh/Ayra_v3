"use client"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewsAndEventData = [
  {
    id: 1,
    title: "MBA (GENERAL)",
    image: "/admissions/academic-programs/img7.webp",
    duration: "3 years",
    seats: "60 per batch",
    description:
      "A program designed to strengthen strategic thinking, leadership, and decision-making while giving you the space to reflect on how business shapes society and the future.",
  },
  {
    id: 2,
    title: "BBA (GENERAL)",
    image: "/admissions/academic-programs/img8.webp",
    duration: "3 years",
    seats: "60 per batch",
    description:
      "An open foundation in business and management program for students who want to explore before choosing a direction.",
  },
  {
    id: 3,
    title: "BBA IN BUSINESS ANALYTICS",
    image: "/admissions/academic-programs/img9.webp",
    duration: "3 years",
    seats: "60 per batch",
    description:
      "A blend of analytical thinking and business understanding program helping you learn how data guides decisions, strategy, and performance.",
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
      <div className="md:border-b border-t md:border-dashed md:border-black  py-5  ">
        <div className="flex flex-col justify-center items-center md:flex-row  container mx-auto px-4">
          <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start justify-start ">
            <Image
              src="/admissions/academic-programs/school-of-business.webp"
              alt="news and events"
              width={350}
              height={370}
              className="w-full h-auto p-4 max-w-[300px] "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center lg:items-center px-4 md:px-0">
            <h2 className="carousel-heading-desktop font-bold text-black font-tthoves-bold w-full md:w-[85%] text-left">
              Learn how organisations work. Learn how you lead.
            </h2>
            <p className="text-black font-tthoves-light w-full md:w-[85%] pt-5  text-left">
              Business at AYRA is not only about markets and management program
              it&apos;s about understanding people, systems, decisions, and impact.
              You learn how to think strategically, collaborate meaningfully,
              and grow into leadership with awareness.
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
                      <h2 className="carousel-heading-desktop font-schabo text-white text-end">
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
                    <h2 className="carousel-heading-desktop font-schabo text-white text-end h-14">
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
