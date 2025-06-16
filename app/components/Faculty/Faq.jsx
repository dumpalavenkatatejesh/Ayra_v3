"use client"

import { useState, useEffect } from "react"
import { FaPlus } from "react-icons/fa"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { bachelorItems, masterItems } from "../../utils/FacultyData/facultyData"
import ImageCardGrid from "./ImageCardGrid"

const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-300 border-dashed md:mx-10">
    <button
      className="w-full flex justify-between items-center md:py-10 p-4 text-xl text-[#002562]"
      onClick={onClick}
    >
      <span
        className="font-schabo uppercase md:text-[70px] text-[28px] text-start"
        style={{ letterSpacing: "0.05em" }}
      >
        {title}
      </span>

      <motion.span
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaPlus className="md:text-3xl text-xl text-[#002562]" />
      </motion.span>
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto", opacity: 1 },
            collapsed: { height: 0, opacity: 0 },
          }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden px-4"
        >
          <div className="md:py-4 text-gray-700">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

const Accordion = ({ items, openIndex, setOpenIndex }) => {
  return (
    <div className="space-y-2 mb-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <ImageCardGrid
            items={item.data.map((card) => ({
              ...card,
              sectionTitle: item.title,
            }))}
          />
        </AccordionItem>
      ))}
    </div>
  )
}

const Faq = () => {
  const [activeTab, setActiveTab] = useState("bachelor")
  const [openIndex, setOpenIndex] = useState(0) // Default open to first item

  // Reset accordion to first item when tab changes
  useEffect(() => {
    setOpenIndex(0)
  }, [activeTab])

  const tabs = [
    { id: "bachelor", label: "Bachelor's" },
    { id: "master", label: "Master's" },
  ]

  const currentItems = activeTab === "bachelor" ? bachelorItems : masterItems

  return (
    <>
      <div>
        <Image
          src="/faculty/tab_img.png"
          alt="faq"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full mx-auto">

        {/* Tabs */} 
        <div className="flex justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-1/2 py-3 font-schabo uppercase md:text-[80px] text-[28px] transition ${activeTab === tab.id
                ? "bg-[#002562] text-white"
                : "bg-[#D8DEEB] text-[#002562]"
                }`}
              style={{ letterSpacing: "0.05em" }}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion Section */}
        <div className="mt-6">
          <Accordion items={currentItems} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
      </div>
    </>
  )
}

export default Faq
