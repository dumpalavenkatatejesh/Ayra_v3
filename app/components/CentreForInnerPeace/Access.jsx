import Image from "next/image";

const Access = () => {
  const highlights = [
    "Access to sophisticated equipment and experimentation space",
    "Support for prototyping, patenting, and commercialisation through the AYRA IPR Cell",
    "Oversight of doctoral and master’s level research, ensuring rigour, mentorship, and academic integrity",
    "Seed funding, research assistance, and infrastructure for proposals of merit",
    "End-to-end support for externally funded research projects",
  ];
  return (
    <div className="bg-[#002561] pt-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 text-white justify-center items-center">
          <h2 className="highlight-heading tracking- font-schabo text-[#66A4F9]">
            ACCESSIBLE TO ALL
          </h2>
          <p className="text-sm md:text-base font-tthoves-extralight self-center text-white">
            AYRA is committed to ensuring that this journey is not reserved for
            a few. The Centre will host experiences and programmes available to
            all members of the campus and wider community. Whether you’re a
            student, teacher, staff member, or a visitor, the door to reflection
            and realignment remains open.
          </p>
        </div>
      </div>
      <div>
          <Image
            src="/centre-for-inner-peace/access.png"
            alt="Accessible to All"
            width={1000}
            height={1000}
            className="w-full pt-5"
          />
        </div>
    </div>
  );
};

export default Access;
