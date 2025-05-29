import React from "react"
import Image from "next/image"

const CTLOffer = () => {
  const paragraphs = [
    "Training and support for educators to adopt innovative teaching methods and adapt to evolving learner needs.",
    "Curriculum Co-Design in collaboration with Schools and Focus Centres to ensure courses remain current, rigorous, and interdisciplinary",
    "Assessment Innovation through meaningful evaluation frameworks that reflect real student growth and potential",
    "Collaborative Educational Research with institutions in India and abroad to drive thought leadership in higher education",
    "Executive & Certification program focused on upskilling educators and working professionals",
  ]

  return (
    <>
      <div className="container mx-auto py-8">
        {/* Header Image */}
        <div className="md:w-[40%] px-4 md:px-0">
          <Image
            src="/teaching-and-learning/head_line.png"
            alt="Head Line"
            width={500}
            height={500}
            priority
          />
        </div>

        {/* Main Image */}
        <div className="md:h-[300px] my-8 ">
          <Image
            src="/teaching-and-learning/img2.png"
            alt="Teaching and Learning"
            width={1200}
            height={600}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Scrollable Paragraphs */}
        <div className="md:max-w-3xl md:mx-auto text-center stext-center h-[100px] overflow-y-auto no-scrollbar ">
          {paragraphs.map((text, index) => (
            <p key={index} className="md:text-2xl mb-8 px-4 md:px-0">
              {text}
            </p>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#002561] text-white py-8  text-sm md:text-2xl px-2 md:px-0 flex items-center justify-center border-b border-gray-300 border-dashed">
        <h2 className=" text-center md:max-w-6xl ">
          For learners and educators who believe in growing together, the Centre
          for Teaching & Learning is your space to evolve.
        </h2>
      </div>
    </>
  )
}

export default CTLOffer
