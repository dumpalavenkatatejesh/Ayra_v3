"use client"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Scroll = () => {
  const paragraphs = [
    "Training and support for educators to adopt innovative teaching methods and adapt to evolving learner needs",
    "Curriculum Co-Design in collaboration with Schools and Focus Centres to ensure courses remain current, rigorous, and interdisciplinary",
    "Assessment Innovation through meaningful evaluation frameworks that reflect real student growth and potential",
    "Collaborative Educational Research with institutions in India and abroad to drive thought leadership in higher education",
    "Executive & Certification program focused on upskilling educators and working professionals",
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  }
  return (
    <>
      <div>
        <div className="w-full text-center my-4 md:my-8">
          <Slider {...settings}>
            {paragraphs.map((slide, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-2 md:px-4"
              >
                <span className="text-base md:text-2xl font-light ml-1">
                  {slide}
                </span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Scroll
