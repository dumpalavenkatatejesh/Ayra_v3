import Image from "next/image"

const AyraResearch = () => {
  const highlights = [
    "Access to sophisticated equipment and experimentation space",
    "Support for prototyping, patenting, and commercialisation through the AYRA IPR Cell",
    "Oversight of doctoral and master’s level research, ensuring rigour, mentorship, and academic integrity",
    "Seed funding, research assistance, and infrastructure for proposals of merit",
    "End-to-end support for externally funded research projects",
  ]
  return (
    <div className="bg-[#2050B1] py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white">
          <h1 className="text-3xl md:text-7xl tracking-wider font-schabo">
            AYRA RESEARCH <br className="hidden md:block" /> CENTRES &
            INITIATIVES
          </h1>
          <p className="text-base md:text-xl font-tthoves-extralight">
            To bring this vision to life, AYRA has launched the AYRA Research
            and Consultancy Hub (ARCH)—a central space for ideation,
            experimentation, and collaboration. ARCH is home to shared research
            infrastructure, technical support, and common facilities that enable
            interdisciplinary projects to take shape and scale
          </p>
        </div>

        <div className="mt-10">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-5">
            {/* Description */}
            <div>
              <h2 className="text-xl md:text-3xl text-white font-bold">
                Key Features Include:
              </h2>
              <ul className="mt-5 space-y-4 text-sm md:text-base text-white font-tthoves-extralight">
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
              <p className="mt-5 text-sm md:text-base text-white font-tthoves-extralight">
                From small beginnings—currently housed in a 1000 sq. ft
                space—ARCH is envisioned to evolve into a network of Centres of
                Excellence, aligned with AYRA’s long-term academic and societal
                goals
              </p>
            </div>

            {/* Image */}
            <div>
              <Image
                src="/centre-for-research/img02.png"
                width={600}
                height={300}
                alt="faculty highlights"
                className="object-center w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AyraResearch
