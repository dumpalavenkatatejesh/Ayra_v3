'use client';
import Image from 'next/image';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { programs } from '../../../utils/AdmissionData/masterProgramData/masterProgramData';

const ExploreOurProgram = () => {
  return (
    <section className="w-full pb-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className=" font-tthoves-demibold text-[#002D72] text-center mb-8">
          EXPLORE OUR PROGRAMS
        </h2>

        {/* Search Input */}
        <div className="flex justify-center mb-12">
          <div className="relative w-full md:w-1/2 text-center">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#002D72] text-2xl">
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="Type a course name, school, or keyword to explore your options"
              className="w-full pl-10 pr-4 py-3 border border-dashed border-[#002D72] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* First Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#0098FF] hover:bg-[#9964FF] transition-colors duration-300 text-white p-6 shadow-md cursor-pointer"
            >
              <h3 className="text-2xl font-bold pb-4 mb-4 border-b border-dashed border-white pb-2 min-h-10">
                {program.title}
              </h3>
              <p className="mb-4 text-sm min-h-14">{program.description}</p>
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurProgram;
