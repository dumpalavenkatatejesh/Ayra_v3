"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function GlobalExchangePrograms() {
  const [isMobile, setIsMobile] = useState(false)

  // Define the slides data
  const slides = [
    {
      title: "GLOBAL EXCHANGE PROGRAMS",
      subtitle: "Experience education from a new perspective.",
      highlights: [
        "Semester-long and short-term exchange opportunities",
        "Credit-transfer mechanisms for a smooth transition",
        "Support with applications and cultural orientation",
        "Pre-departure workshops to prepare you abroad",
      ],
    },
    {
      title: "INTERNATIONAL COLLABORATIONS",
      subtitle: "Partnerships that go beyond paper",
      highlights: [
        "Academic MoUs with universities and institutes across the globe",
        "Collaborative research, joint degrees, and faculty exchange opportunities",
        "Access to international seminars, conferences, and knowledge-sharing platforms",
        "Co-designed programmes focused on emerging global themes",
      ],
    },
    {
      title: "SUPPORT FOR INTERNATIONAL STUDENTS",
      subtitle: "A welcoming home away from home.",
      highlights: [
        "Dedicated orientation sessions and onboarding support",
        "Visa and documentation guidance",
        "Language and academic support",
        "Peer mentoring, cultural events, and integration support to make every student feel at home at AYRA",
      ],
    },
  ]

  // Set default slider settings
  const defaultSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  // Update slider settings for mobile view
  const mobileSettings = {
    ...defaultSettings,
    dots: true,
  }

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) 
    }

    handleResize() // Initial check on mount
    window.addEventListener("resize", handleResize) 

    return () => {
      window.removeEventListener("resize", handleResize) 
    }
  }, [])

  return (
    <>

<style>
        {`
          @media (max-width: 768px) {
            .slick-dots li button:before {
              font-size: 10px !important; /* Make the dot smaller */
              color: #2050B1 !important; /* Change the dot color */
            }
               .slick-dots li.slick-active button:before {
        color: blue !important; /* Active dot color */
      }

            .slick-dots {
              bottom: -25px !important; /* Optional: adjust position if needed */
            }
          }
          `}
      </style>
    <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat py-8">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="highlight-heading tracking-wider font-schabo text-[#2050B1] mb-6">
          WHAT WE OFFER
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
          {/* Left Image */}
          <div>
            <Image
              src="/international/int-img-1.png"
              width={600}
              height={300}
              alt="faculty highlights"
              className="object-center w-full h-auto"
              priority
            />
          </div>

          {/* Right Carousel */}
          <div className="min-h-[340px]">
            <Slider {...(isMobile ? mobileSettings : defaultSettings)}>
              {slides.map((slide, index) => (
                <div key={index} className="p-2">
                  <div className="transition-all duration-500 ease-in-out">
                    <h2 className="carousel-heading-desktop leading-[28px] lg:leading-[48px] text-[#2050B1] font-tthoves-bold">
                      {slide.title}
                    </h2>
                    <h2 className="lg:text-2xl text-xl mt-4 text-black font-tthoves-regular">
                      {slide.subtitle}
                    </h2>
                    <ul className="mt-4 md:mt-6 space-y-4 text-sm md:text-base text-black font-tthoves-extralight">
                      {slide.highlights.map((text, idx) => (
                        <li className="flex items-start gap-2" key={idx}>
                          <Image
                            src="/rocket-icon.svg"
                            width={20}
                            height={16}
                            className="w-5 h-4 rotate-45 mt-1.5"
                            alt="rocket-logo"
                          />
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
