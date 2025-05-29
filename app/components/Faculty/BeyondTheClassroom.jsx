import Image from "next/image"

const BeyondTheClassroom = () => {
  const highlights = [
    "Capstone projects and research",
    "Career mentoring and domain insights",
    "Startups and innovation labs",
    "Conferences, competitions, and fieldwork",
    "Internships and industry collaboration",
  ]

  return (
    <div className="border-b border-dashed border-gray-300 mb-5">
      <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 px-4">
        {/* Center Vertical Dashed Border (only visible on md and above) */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-[repeating-linear-gradient(to_bottom,#ccc,#ccc_4px,transparent_4px,transparent_8px)]" />

        {/* Description */}
        <div className="space-y-5 text-[#002561] text-base md:text-lg md:pr-12 z-10">
          <h2 className="text-2xl text-black font-tthoves-medium leading-tight">
            AYRA faculty don’t disappear after lectures—they stay engaged,
            offering guidance on:
          </h2>
          <ul className="mt-6 space-y-4 text-sm md:text-base text-black font-tthoves-extralight">
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
          <h2 className="text-xl text-black font-extrabold leading-tight font-tthoves-medium">
            They are sounding boards, accountability partners, and trusted
            guides throughout your time at AYRA.
          </h2>
        </div>

        {/* Image */}
        <div className="z-10 md:pl-12">
          <Image
            src="/faculty/beyond-the-classroom.png"
            width={500}
            height={300}
            alt="faculty highlights"
            className="object-center mx-auto md:mx-0"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default BeyondTheClassroom
