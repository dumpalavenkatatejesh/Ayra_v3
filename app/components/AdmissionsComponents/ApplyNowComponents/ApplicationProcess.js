"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {
  checklistItems,
  PaymentDetailsData,
} from "../../../utils/AdmissionData/ApplicationData/ApplicationData";
import { IoMdClose } from "react-icons/io";

const ApplicationProcess = () => {
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
          {isOpen ? "SHOW APPLICATION CHECKLIST" : "SHOW APPLICATION CHECKLIST"}
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
                    Before you initiate your application, ensure you have the
                    following in place.
                  </h2>
                </div>
                <div className="text-black lg:px-10 p-5 pt-5">
                  {checklistItems.map((item, index) => (
                    <div className="pt-5" key={index}>
                      <h5 className="lg:text-xl text-lg mb-2">{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="lg:px-20 px-5 pb-10 pt-4">
                  {PaymentDetailsData.map((item, index) => (
                    <div key={index}>
                      <ul className="space-y- text-gray-700">
                        <li className="flex items-start gap-3">
                          <Image
                            src="/rocket-icon.svg"
                            alt="Bullet Icon"
                            width={16}
                            height={16}
                            className="mt-1 rotate-[50deg]"
                          />
                          <p>{item.description}</p>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationProcess;
