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
      title: "  AYRA’S RESEARCH ECOSYSTEM IS BUILT AROUND THREE KEY GOALS:",

      highlights: [
        "Fostering Innovation through cross-disciplinary collaboration and creativity",
        "Responding to real-world needs evidence-based inquiry and applied solutions",
        "Creating Knowledge That Travels across sectors, communities, and geographies",
      ],
    },
    {
      title: "OUR RESEARCH FOCUS AREAS INCLUDE:",

      highlights: [
        "Sport & Wellness– Promoting physical, mental, and social well-being through integrated, human-centred research",
        "Sustainability– With a starting focus on Water and Energy, AYRA is building research capacity around resource resilience and climate responsibility",
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
      setIsMobile(window.innerWidth <= 768) // 768px or smaller is considered mobile
    }

    handleResize() // Initial check on mount
    window.addEventListener("resize", handleResize) // Update on window resize

    return () => {
      window.removeEventListener("resize", handleResize) // Cleanup on unmount
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
              bottom: -20px !important; /* Optional: adjust position if needed */
            }
          }
          `}
      </style>
      <div className="bg-[url('/opencanvas/opc-bg-img.png')] bg-cover bg-center bg-no-repeat py-8">
        <div className="container mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#2050B1]">
            WHAT DRIVES RESEARCH <br className="hidden md:block" /> AT AYRA?
          </h1>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 py-5">
            {/* Left Image */}
            <div>
              <Image
                src="/centre-for-research/img01.png"
                width={600}
                height={300}
                alt="faculty highlights"
                className="object-center w-full h-auto"
                priority
              />
            </div>

            {/* Right Carousel */}
            <div className="min-h-[280px]">
              <Slider {...(isMobile ? mobileSettings : defaultSettings)}>
                {slides.map((slide, index) => (
                  <div key={index} className="p-2">
                    <div className="transition-all duration-500 ease-in-out">
                      <h2 className="text-2xl md:text-[48px] leading-[28px] lg:leading-[48px] text-[#2050B1] font-tthoves-bold uppercase">
                        {slide.title}
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
