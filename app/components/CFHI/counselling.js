import Image from "next/image";

const Counselling = () => {
  const highlights = [
    "Confidential one-on-one counselling",
    "Group therapy and crisis intervention",
    "Confidence-building and relationship counselling",
    "Safe spaces for LGBTQ+ and international students",
    "Faculty mentoring and peer buddy systems to support academics and personal growth",
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
                COUNSELLING & <br className="hidden md:block" /> MENTORSHIP CELL
              </h2>
              <h4 className="text-lg pt-5">
                Within the Centre, the Counselling and Mentorship Cell is led by
                a licensed psychotherapist with a trained team of counsellors.
                It offers:
              </h4>
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
                <p className="text-sm md:text-base text-black font-tthoves-extralight">
                  Together, the Centre for Student Welfare ensures AYRA students
                  learn, grow, and thrive in balance with themselves and the
                  world around them
                </p>
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

export default Counselling;
