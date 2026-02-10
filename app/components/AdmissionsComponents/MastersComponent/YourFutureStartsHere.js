'use client';
import Image from 'next/image';
import React from 'react';
import { futureStartContent } from '../../../utils/AdmissionData/masterProgramData/masterProgramData';


const YourFutureStartsHere = () => {
  return (
    <section className="w-full md:py-16 py-6">
      <div className="container mx-auto px-4 md:px-0">
        {futureStartContent.map((item, index) => (
          <div key={index}>
            {/* Text Content */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center md:mb-12 mb-6">
              <h2 className="highlight-heading font-schabo text-[#002D72] md:w-1/2 whitespace-pre-line">
                {item.title}
              </h2>
              <p className="md:w-1/2 text-gray-600 mt-6 md:mt-0 text-base md:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Image */}
            <div className="w-full">
              <Image
                src={item.image}
                alt="Students working together"
                width={1600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YourFutureStartsHere;
