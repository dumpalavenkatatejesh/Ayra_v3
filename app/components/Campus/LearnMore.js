"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { LearnMoreListsData } from "../../utils/DistinctForYouData/LearnMoreData";
import { IoMdClose } from "react-icons/io";

const LearnMore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div>
      <div className="p-4 lg:max-w-4xl  mx-auto flex flex-col items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#3B76CB] text-white px-6 py-3 font-semibold shadow-md hover:bg-[#2050B1] transition"
        >
          {isOpen
            ? "Learn More About Campus Safety & Support"
            : "Learn More About Campus Safety & Support"}
        </button>

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
              ref={modalRef}
              className="relative bg-white max-h-[90vh] overflow-y-auto w-full max-w-4xl mx-4 shadow-xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-black hover:text-white text-lg font-bold bg-[#fff] rounded-full w-7 h-7 flex items-center justify-center hover:bg-[#133c80] transition"
              >
                <IoMdClose />
              </button>
              <div className="border-dashed border-[#D0E3FF]">
                <div className="bg-[#002561] lg:p-10 p-5">
                  <h2 className="text-2xl font-bold text-[#59B0F9] ">
                    Emergency Response Systems
                  </h2>
                  <p className="text-white pt-5">
                    At AYRA, student safety and well-being are integral to
                    campus life. Our Emergency Response Systems ensure that
                    every member of the community can rely on immediate support,
                    clear protocols, and access to care—whether it’s a medical
                    situation, mental health concern, or grievance redressal.
                  </p>
                </div>
                <div className="lg:px-20 px-5 pb-10 pt-4">
                  {(() => {
                    const groupedData = [];
                    let currentGroup = null;

                    LearnMoreListsData.forEach((item, index) => {
                      if (item.title) {
                        // Start a new group
                        currentGroup = {
                          title: item.title,
                          items: [item],
                        };
                        groupedData.push(currentGroup);
                      } else if (currentGroup) {
                        // Add to current group
                        currentGroup.items.push(item);
                      }
                    });

                    return groupedData.map((group, groupIndex) => (
                      <div key={groupIndex} className="mb-8">
                        <h4 className="font-tthoves-bold text-2xl pb-5">
                          {group.title}
                        </h4>
                        <ul className="space-y-3 text-gray-700">
                          {group.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3"
                            >
                              <Image
                                src="/rocket-icon.svg"
                                alt="Bullet Icon"
                                width={16}
                                height={16}
                                className="mt-1 rotate-[50deg]"
                              />
                              <p>{item.description}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearnMore;
