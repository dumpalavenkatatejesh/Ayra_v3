import React from "react";
import Image from "next/image";

const Core = () => {
  const items = [
    {
      title: "Primary Medical Care:",
      description:
        "Outpatient treatment for common illnesses, injuries, and chronic condition management.",
    },
    {
      title: "Emergency Response",
      description:
        "First aid, acute care, and disaster-readiness protocols.",
    },
    {
      title: "Preventive Health Services",
      description:
        "Vaccinations, screenings, infection control, and wellness monitoring.",
    },
    {
      title: "Health Education & Promotion",
      description:
        "Workshops on nutrition, hygiene, mental health, and awareness campaigns for global health days.",
    },
    {
      title: "Medical Records & Referrals",
      description:
        "Confidential maintenance of student health records and coordination with hospitals or specialists when required.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 lg:px-14 py-6 md:py-10">
        <div>
          <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#002561] text-center pb-5">
          CORE SERVICES
          </h1>
        </div>
        {/* Points Grid */}
        <div className="container mx-auto ">
          {/* Points */}
          <div className="lg:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  lg:divide-x divide-dashed divide-[#4FA6FF]">
              {items.map((item, index) => (
                <div key={index} className="px-2 lg:px-">
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
      </div>
    </>
  );
};

export default Core;
