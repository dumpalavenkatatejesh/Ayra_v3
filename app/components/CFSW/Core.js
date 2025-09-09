import React from "react";
import Image from "next/image";

const Core = () => {
  const items = [
    {
      title: "Student Development Programs:",
      description:
        "Sessions on leadership, life skills, time management, and personality growth.",
    },
    {
      title: "Equality & Inclusion",
      description:
        "Gender sensitization drives and open forums for intercultural dialogue",
    },
    {
      title: "Celebrations & Community",
      description:
        "Festivals and cultural activities that strengthen social bonding",
    },
    {
      title: "Orientation & Onboarding",
      description:
        "Helping new students transition smoothly into AYRA life.",
    },
    {
      title: "Special Care",
      description:
        "Dedicated support for students from marginalised backgrounds, or those with disabilities and unique needs.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 lg:px-14 py-6 md:py-10">
        <div>
          <h1 className="text-3xl md:text-8xl tracking-wider font-schabo text-[#002561] text-center pb-5">
          CORE INITIATIVES
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
                    className="text-xl md:text-2xl text-[#2050B1] font-tthoves-bold lg:h-24"
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
