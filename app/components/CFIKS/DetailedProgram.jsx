import Image from "next/image";

const DetailedProgram = () => {
  const highlights = [
    "Available to all students, regardless of school or program",
    "All courses are credit-bearing",
    "Delivered by a dedicated faculty of scholars and contemporary experts in the field of IKS",
    "Combines classroom learning with heritage walks, field visits, and cultural experiences",
    "Modular structure to allow depth in chosen areas",
    "Digital library access to curated IKS resources and publications",
  ];
  return (
    <div className="bg-[#fff] pb-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 text-white"></div>

        <div className="lg:mt-10">
          <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-5">
            {/* Description */}
            <div>
              <h2 className="highlight-heading text-[#2050B1] tracking-wider font-schabo">
                DETAILED PROGRAM <br className="hidden md:block" /> FEATURES
              </h2>
              <ul className="mt-5 space-y-4 text-sm md:text-base text-black font-tthoves-extralight">
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

            {/* Image */}
            <div>
              <Image
                src="/cfiks/detailed-program.png"
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
  );
};

export default DetailedProgram;
