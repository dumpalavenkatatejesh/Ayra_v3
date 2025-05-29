import Image from "next/image"
import { FaPaperPlane } from "react-icons/fa"

const SustainabilitySection = () => {
  return (
    <section className="my-7 border-t border-dashed border-gray-300">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 max-w-7xl mx-auto">
        {/* Center Vertical Dashed Border */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-dashed-border" />

        {/* Left Side: Title */}
        <div className="pr-6 md:pr-12">
          <h2 className="text-4xl md:text-6xl tracking-wide text-[#002561] font-schabo leading-tight text-center md:text-left">
            SUSTAINABILITY &<br /> WELLBEING AT THE CORE
          </h2>
        </div>

        {/* Right Side: List */}
        <ul className="pl-6 md:pl-12 space-y-5 text-[#002561] text-base md:text-lg font-tthoves-extralight">
          {[
            "Green, open spaces that inspire fresh thinking and mindfulness",
            "Holistic well-being programs, fitness zones, and outdoor recreational areas",
            "Electric modes of transport for sustainability",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {/* <FaPaperPlane className="text-blue-600 mt-1 shrink-0" /> */}
              <Image
                src="/rocket-icon.svg"
                width={20}
                height={16}
                className="w-5 h-4 rotate-45"
                alt="rocket-logo"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <Image
          src="/campus/sustainability-banner02.png"
          alt="Sustainability Banner"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </section>
  )
}

export default SustainabilitySection
