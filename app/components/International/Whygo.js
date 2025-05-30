import React from "react"
import Image from "next/image"

const Whygo = () => {
  const items = [
    {
      title: "Interconnected Curriculum",
      description:
        "AYRA’s academic programs are designed to connect local insight with global outlook",
    },
    {
      title: "Cross-Cultural Learning",
      description:
        "Expand your worldview through exposure to diverse perspectives and lived experiences",
    },
    {
      title: "Global Career Readiness",
      description:
        "Build international networks, enhance your resume, and gain experience in varied work cultures",
    },
    {
      title: "Flexible Opportunities",
      description:
        "Choose from semester exchanges, summer schools, virtual immersions, or joint research initiatives",
    },
    {
      title: "Personalised Guidance",
      description:
        "The International Centre works closely with students to map the right opportunity to their academic and career goals",
    },
  ]

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Points */}
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:divide-x divide-dashed divide-[#4FA6FF]">
            {items.map((item, index) => (
              <div key={index} className="px-2 lg:px-4">
                <h1
                  className="text-xl md:text-2xl text-[#2050B1] font-tthoves-bold"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h1>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image + Overlay */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[590px] my-4">
          <Image
            src="/international/int-img-3.png"
            alt="Discover Your Campus"
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row  gap-8 md:gap-16 py-16 container mx-auto px-4">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 ">
          <h1 className="text-3xl md:text-7xl tracking-wider font-schabo text-[#2050B1] mb-6">
            STUDENT OUTCOMES <br /> WE AIM FOR
          </h1>

          <div>
           
          <h2 className=" text-xl mt-4 text-black font-tthoves-extralight mb-4">
              The International Centre supports AYRA students in achieving:
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Successful semester exchanges and credit transfers",
                "Admission into top global postgraduate programs",
                "Global internships and cross-border placements",
                "Participation in international conferences and competitions",
                "Lifelong connections with peers, mentors, and institutions around the world",
               
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    alt="bullet"
                    width={18}
                    height={18}
                    className="mt-1 rotate-[50deg]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/admissions/placements/student_outcomes.png" // Replace with your own image path
            alt="Students working on project"
            width={800}
            height={600}
            className="w-full h-auto "
          />
          <p className="text-xs text-white bg-black/60 px-2 py-1 absolute mt-[-30px] ml-2 rounded">
            iStock · Credit: eyesfoto
          </p>
        </div>
      </div>
    </>
  )
}

export default Whygo
