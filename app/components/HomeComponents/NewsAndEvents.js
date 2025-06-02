"use client"
import Image from "next/image"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const NewsAndEventData = [
  {
    id: 1,
    title: "ADMISSIONS OPEN FOR AYRA 2025-26",
    image: "/home/new/home_story_img1.jpg",
  },
  {
    id: 2,
    title: "AYRA SIGNS MOU WITH LEADING GLOBAL TECH ACCELERATOR",
    image: "/home/new/home_story_img2.jpg",
  },
  {
    id: 3,
    title:
      "OPEN CANVAS DIALOGUES : A SPEAKER SERIES ON LEARNING WITHOUT LIMITS",
    image: "/home/new/home_story_img3.jpg",
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
        <div className="container flex flex-col gap-10 py-10">
          <div className="flex flex-col items-center px-4">
            <Image
              src="/home/news-and-events.png"
              className="text-center"
              alt="news and events"
              width={500}
              height={100}
            />
          </div>
        </div>
        <div className="bg-[#2050B1] flex flex-col pb-10">
          <div className="flex flex-col md:flex-row md:border-b md:border-dashed md:border-white ">
            <div className="w-full md:w-1/2 md:border-r md:border-dashed md:border-white flex flex-col items-center">
              <p className="font-schabo text-4xl md:text-[80px] text-[#66A4F9] leading-tight p-4 pb-0">
                STORIES IN THE <br className="md:flex hidden" /> MAKING
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-4">
              <p className="text-white md:w-[60%] font-tthoves-light">
                At AYRA, every day brings something new—ideas sparked,
                milestones reached, and bold steps taken. From academic
                announcements to student-led initiatives and expert-led panels,
                this is where our story unfolds in real time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-[#2050B1] py-10">
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
                      <h2 className="text-3xl font-schabo text-white text-end">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
            {NewsAndEventData.map((item) => (
              <div key={item.id} className="relative overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  width={450}
                  height={700}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-10 w-full p-4 leading-tight space-y-2">
                  <h2 className="text-3xl lg:text-5xl font-schabo text-white text-end">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsAndEvents
