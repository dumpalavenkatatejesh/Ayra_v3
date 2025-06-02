import React from "react";
import Image from "next/image";

const Whygo = () => {
  const items = [
    {
      title: "Interconnected Curriculum",
      description:
        "AYRA’s academic programs are designed to connect local insight with global outlook",
    },
    {
      title: "Cross-Cultural Learning",
      description:
        "Expand your worldview through exposure to diverse perspectives and lived experiences",
    },
    {
      title: "Global Career Readiness",
      description:
        "Build international networks, enhance your resume, and gain experience in varied work cultures",
    },
    {
      title: "Flexible Opportunities",
      description:
        "Choose from semester exchanges, summer schools, virtual immersions, or joint research initiatives",
    },
    {
      title: "Personalised Guidance",
      description:
        "The International Centre works closely with students to map the right opportunity to their academic and career goals",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Points */}
        <div className="py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:divide-x divide-dashed divide-[#4FA6FF]">
            {items.map((item, index) => (
              <div key={index} className="px-2 lg:px-4">
                <h1
                  className="text-xl md:text-2xl text-[#2050B1] font-tthoves-bold"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h1>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="">
          <div className="mb-10">
            <div className="relative w-full container mx-auto py-4">
              {/* Background Image */}
              <div className="h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src="/international/int-img-3.png"
                  alt="Who Can Apply Background"
                  fill
                  className="object-cover lg:block hidden"
                  priority
                />
              </div>
              <div className="h-[20vh] lg:h-auto w-full">
                <Image
                  src="/international/int-faculty-mob.png"
                  alt="Who Can Apply Background"
                  fill
                  className="lg:hidden object-cover"
                  priority
                />
              </div>
              {/* Overlay Content */}
              <div className="absolute lg:bottom-[9rem] bottom-28 lg:left-[55%] left-[0%] flex items-center">
                <div className=" text-white px-5">
                  <p className="lg:text-base text-sm px-4">
                    AYRA regularly hosts international experts, visiting
                    scholars, and guest faculty to enrich classroom discussions
                    and bring global expertise into every school. From
                    masterclasses to collaborative workshops. students benefit
                    from a global learning ecosystem-right here on campus.
                  </p>

                  {/* <div className="pt-5">
                        <HoverButton5 text="Know more" />
                      </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <div className="flex flex-col md:flex-row  gap-8 md:gap-16 lg:py-16 pb-10 container mx-auto px-4">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-7xl tracking-wider font-schabo text-[#2050B1] mb-6">
            STUDENT OUTCOMES <br /> WE AIM FOR
          </h1>

          <div>
            <h2 className=" text-2xl mt-4 text-black font-tthoves-regular mb-4 ">
              The International Centre supports AYRA students in achieving:
            </h2>
            <ul className="space-y-3 text-gray-700">
              {[
                "Successful semester exchanges and credit transfers",
                "Admission into top global postgraduate programs",
                "Global internships and cross-border placements",
                "Participation in international conferences and competitions",
                "Lifelong connections with peers, mentors, and institutions around the world",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Image
                    src="/rocket-icon.svg"
                    alt="bullet"
                    width={18}
                    height={18}
                    className="mt-1 rotate-[50deg]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/admissions/placements/student_outcomes.png" // Replace with your own image path
            alt="Students working on project"
            width={800}
            height={600}
            className="w-full h-auto "
          />
        </div>
      </div>
    </>
  );
};

export default Whygo;
