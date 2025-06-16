"use client"

import Image from "next/image"

const getTitleBgColor = (sectionTitle) => {
  if (sectionTitle.includes("Liberal Arts")) return "text-[#ffb3b8]"
  if (sectionTitle.includes("Hospitality")) return "text-[#FFBCDB]"
  if (sectionTitle.includes("Business")) return "text-[#afd4ed]"
  if (sectionTitle.includes("Engineering & Technology")) return "text-[#bbb3e3]"
  if (sectionTitle.includes("Sports Science")) return "text-[#f0d197]"
  return ""
}

const getOverlayColor = (sectionTitle) => {
  if (sectionTitle.includes("Liberal Arts")) return "bg-[#FF4D48]"
  if (sectionTitle.includes("Hospitality")) return "bg-[#FD5DB9]"
  if (sectionTitle.includes("Business")) return "bg-[#0097FE]"
  if (sectionTitle.includes("Engineering & Technology")) return "bg-[#9B63FE]"
  if (sectionTitle.includes("Sports Science")) return "bg-[#FEA202]"
  return ""
}
 
const ImageCardGrid = ({ items }) => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:mt-8 mt-2">
      {items.map((item) => {
        const titleBg = getTitleBgColor(item.sectionTitle || "")
        const overlayBg = getOverlayColor(item.sectionTitle || "")

        return (
          <li key={item.id}>
            <div className="relative overflow-hidden shadow-lg group">
              <Image
                src={item.image}
                width={450}
                height={700}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Colored overlay on hover */}
              <div
                className={`absolute inset-0 ${overlayBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
              />

              {/* Initial content (BOTTOM) */}
              <div className="absolute bottom-0 w-full p-4 pb-20 space-y-2 z-20 transition-opacity duration-500 group-hover:opacity-0">
                <h2
                  className={`text-7xl text-white font-schabo tracking-wide inline-block px-2 ${titleBg}`}
                >
                  {item.title}
                </h2>
                <p
                  className="lg:text-xl text-white font-tthoves-extralight"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>

              {/* Hover content (TOP) */}
              <div className="absolute top-0 w-full p-4 space-y-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-[-20px] group-hover:translate-y-0">
                <h2 className="text-3xl sm:text-4xl text-white font-bold border-b border-white border-dashed pb-1 min-h-[120px]">
                  {item.hoverTitle}
                </h2>
                <p
                  className="text-base lg:text-xl text-white font-tthoves-extralight"
                  dangerouslySetInnerHTML={{ __html: item.hoverDescription }}
                />
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ImageCardGrid
