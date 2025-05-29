"use client"

import { TfiPlus } from "react-icons/tfi"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const servicesList = [
  {
    ques: "Liberal Arts Programs",
    bachelor:
      "Completion of Class 12 or equivalent with a minimum aggregate of 50%. Students from any stream are welcome. An interest in the arts, writing, or social sciences is recommended.",
    master:
      "A recognised undergraduate degree in any discipline. Candidates should demonstrate analytical thinking, communication skills, and a keen interest in economic or creative research.",
  },
  {
    ques: "Hospitality Programs",
    bachelor:
      "Pass Class 12 or equivalent in any stream with a minimum of 50%. A passion for hospitality, culinary arts, or customer engagement is desirable.",
    master:
      "A bachelor’s degree in hospitality, business, or a related field. Prior industry experience or internships will strengthen the application.",
  },
  {
    ques: "Business Programs",
    bachelor:
      "Pass Class 12 or equivalent with a minimum of 50%. Students from all academic backgrounds are eligible.",
    master:
      "A recognised undergraduate degree (in any discipline) with a minimum of 50%. Prior work experience, though not mandatory, is preferred for MBA applicants.",
  },
  {
    ques: "Engineering & Technology Programs",
    bachelor:
      "Pass Class 12 with Physics, Mathematics, and Chemistry/Computer Science. A minimum of 60% aggregate is required.",
    master:
      "A B.Tech or B.E. degree in a relevant discipline with at least 60% marks. Candidates should also demonstrate programming proficiency or subject-specific expertise.",
  },
  {
    ques: "Sports Science Programs",
    bachelor:
      "Class 12 with Biology, Physical Education, or Science stream subjects. A strong interest or background in athletics, sports, or human biology is ideal.",
    master:
      "A bachelor’s degree in sports sciences, physical education, life sciences, or an allied discipline. Prior experience in sports coaching, fitness, or wellness is recommended.",
  },
]

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div id="accordion-flush" className="max-w-screen-lg mx-auto">
      {servicesList.map((service, index) => (
        <div key={index} className="border-b border-dashed border-gray-400">
          <h2>
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium text-[#2F2F2F] gap-3"
            >
              <span className="text-left text-xl md:text-2xl text-[#002561] font-tthoves-demibold">
                {service.ques}
              </span>
              <span
                //onClick={() => toggleAccordion(index)}
                className={`text-xl sm:text-3xl transform transition-transform duration-300 cursor-pointer text-[#002561] ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                {<TfiPlus />}
              </span>
            </button>
          </h2>

          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="py-5 text-[#002561]">
                  <span className="">Bachelor’s:</span>
                  <p className="font-tthoves-extralight">{service.bachelor}</p>
                  <span className="mt-3">Master’s:</span>
                  <p className="font-tthoves-extralight">{service.master}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default Accordion
