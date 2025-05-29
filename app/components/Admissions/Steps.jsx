import Image from "next/image"
import React from "react"

const stepsData = [
  {
    id: 1,
    icon: "/admissions/steps/step1.svg",
    title: "Step 1",
    description: "Fill out the online application form",
  },
  {
    id: 2,
    icon: "/admissions/steps/step2.svg",
    title: "Step 2",
    description: "Upload the required documents",
  },
  {
    id: 3,
    icon: "/admissions/steps/step3.svg",
    title: "Step 3",
    description: "Attend an interview (if applicable)",
  },
  {
    id: 4,
    icon: "/admissions/steps/step4.svg",
    title: "Step 4",
    description: "Receive your offer letter and confirm your admission.",
  },
]

const Steps = () => {
  return (
    <div className="pt-14 px-4 sm:px-0">
      {/* Centered Image */}
      <div className="flex justify-center mb-10">
        <Image
          src="/admissions/simple-steps-to-enrol.png"
          width={600}
          height={300}
          alt="simple steps to enrol"
          className="w-full max-w-[600px] h-auto"
        />
      </div>

      {/* Steps Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center border-t border-dashed border-gray-200">
        {stepsData.map((step, index) => {
          const isFirstColumnSm = index % 2 === 0
          const isLastColumnLg = (index + 1) % 4 === 0

          return (
            <li
              key={step.id}
              className={`relative p-6 flex flex-col items-center border-t border-dashed border-gray-200
            ${!isFirstColumnSm ? "sm:border-l" : ""}
            ${!isLastColumnLg ? "lg:border-r" : ""}`}
            >
              <Image
                src={step.icon}
                width={60}
                height={60}
                alt={step.title}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold text-[#1B3C89] mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-[#1B3C89]">{step.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Steps
