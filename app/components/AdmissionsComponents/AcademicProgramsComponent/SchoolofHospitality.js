"use client"
import Image from "next/image"
import React from "react"

const NewsAndEventData = [
  {
    id: 1,
    title: "BA IN CULINARY ARTS",
    image: "/admissions/academic-programs/img10.webp",
    duration: "3 years",
    seats: "60 per batch",
    description:
      "A program that treats food as both craft and culture program helping you build technical skill while understanding sustainability, experience, and responsibility.",
  },
  //   {
  //     id: 2,
  //     title: "BBA (GENERAL)",
  //     image: "/home/new/home_story_img2.jpg",
  //     duration: "3 years",
  //     seats: "60 per batch",
  //     description:
  //       "An open foundation in business and management program for students who want to explore before choosing a direction.",
  //   },
  //   {
  //     id: 3,
  //     title: "BBA IN BUSINESS ANALYTICS",
  //     image: "/home/new/story-03.png",
  //     duration: "3 years",
  //     seats: "60 per batch",
  //     description:
  //       "A blend of analytical thinking and business understanding program helping you learn how data guides decisions, strategy, and performance.",
  //   },
]

const NewsAndEvents = () => {
  return (
    <>
      <div className="md:border-b border-t md:border-dashed md:border-black  py-5  ">
        <div className="flex flex-col justify-center items-center md:flex-row  container mx-auto px-4">
          <div className="w-full md:w-1/2 flex flex-col items-center lg:items-start justify-start ">
            <Image
              src="/admissions/academic-programs/school-of-hospitality.webp"
              alt="news and events"
              width={450}
              height={470}
              className="w-full h-auto p-4 max-w-[400px] "
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center lg:items-center px-4 md:px-0">
            <h2 className="carousel-heading-desktop font-bold text-black font-tthoves-bold w-full md:w-[85%] text-left">
              Craft skills. Culture. Conscious creation.
            </h2>
            <p className="text-black font-tthoves-light w-full md:w-[85%] pt-5  text-left">
              Hospitality at AYRA is about learning how to serve with care,
              intention, and understanding. You explore how spaces, moments, and
              cultures come together to create experiences that are thoughtful,
              responsible, and human.
            </p>
          </div>
        </div>
      </div>
      {/* Programs Grid Section */}
      <div className=" py-10">
        <div className="container mx-auto px-4">
          {/* Grid: Mobile (1 column), Desktop (2 columns), Large Desktop (3 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
