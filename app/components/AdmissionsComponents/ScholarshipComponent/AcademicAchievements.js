'use client';
import Image from 'next/image';
import React from 'react';
import { academicContent, sportsContent, achievementImages, entrepreneurShip, sustainability, arts, communityDevelopment } from '../../../utils/AdmissionData/scholarshipData/scholarshipData';

const AcademicAchievements = () => {
  return (
    <>
      <div className=" w-full flex items-center justify-center md:p-0 p-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row md:gap-60 container mx-auto">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 space-y-10 py-20">

              {/* Academic Section */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-tthoves-bold whitespace-pre-line">
                  {academicContent.title}
                </h1>
                <p className="mt-2 text-gray-600">{academicContent.description}</p>
              </div>

              {/* Sports Section */}
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-tthoves-bold whitespace-pre-line">
                  {sportsContent.title}
                </h1>
                <p className="mt-2 text-gray-600">{sportsContent.description}</p>
                <p className="mt-2 font-black">{sportsContent.subTitle}</p>

                <ul className="mt-4 space-y-3 text-gray-700">
                  {sportsContent.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Image
                        src="/rocket-icon.svg"
                        alt="Bullet Icon"
                        width={16}
                        height={16}
                        className="mt-1 rotate-[50deg]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other Sections */}
              {[entrepreneurShip, sustainability, arts, communityDevelopment].map((section, idx) => (
                <div key={idx}>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-tthoves-bold whitespace-pre-line uppercase">
                    {section.title}
                  </h1>
                  <p className="mt-2 text-gray-600">{section.description}</p>
                </div>
              ))}

            </div>

            {/* Right Images */}
            <div className="lg:w-[28%] flex flex-col items-end">
              {achievementImages.map((src, index) => {
                const isFirst = index === 0;
                const isLast = index === achievementImages.length - 1;

                return (
                  <div
                    key={index}
                    className={`
                    border-dashed border-[#A9B8D5] 
                    w-full h-[350px] flex items-center justify-center
                    ${isFirst ? 'border-l-2 border-r-2 md:border-t-0 border-t-2' : 'border-t-2 border-l-2 border-r-2'}
                    ${isLast ? 'md:border-b-0 border-b-2' : ''}
                  `}
                  >
                    <Image
                      src={src}
                      alt={`Achievement ${index + 1}`}
                      width={300}
                      height={300}
                      className="object-contain max-w-full max-h-full p-6"
                    />
                  </div>
                );
              })}
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicAchievements;
