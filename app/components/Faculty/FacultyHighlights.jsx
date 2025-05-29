import Image from "next/image"

const FacultyHighlights = () => {
  const highlights = [
    "Researchers working at the frontiers of AI, psychology, media, economics, and performance studies",
    "Educators who’ve led at top global institutions and bring that experience to AYRA’s classrooms",
    "Industry professionals who mentor students on real-world challenges, startup ideas, and career pathways",
    "Artists, journalists, analysts, chefs, and coaches who bring passion and perspective into every session",
  ]

  return (
    <div className="bg-[#2050B1]">
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 px-4">
        {/* Center Vertical Dashed Border for md+ screens */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-[repeating-linear-gradient(to_bottom,#fff,#fff_4px,transparent_4px,transparent_8px)] z-0" />

        {/* Left Image */}
        <div className="pr-6 md:pr-12 z-10">
          <Image
            src="/faculty/faculty-highlights.png"
            width={500}
            height={300}
            alt="faculty highlights"
            className="object-center mx-auto md:mx-0"
            priority
          />
        </div>

        {/* Right Description */}
        <div className="pl-6 md:pl-12 space-y-5 text-white text-base md:text-lg z-10">
          <h2 className="text-2xl font-extrabold leading-tight">
            Our growing team includes:
          </h2>
          <ul className="mt-6 space-y-4 text-sm md:text-base">
            {highlights.map((text, idx) => (
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
    </div>
  )
}

export default FacultyHighlights
