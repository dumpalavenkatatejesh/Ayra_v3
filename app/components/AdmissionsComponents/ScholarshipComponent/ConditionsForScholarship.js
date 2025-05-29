'use client';
import React from 'react';
import Image from 'next/image';
import { scholarshipConditions } from '../../../utils/AdmissionData/scholarshipData/scholarshipData';

const ConditionsForScholarship = () => {
    return (
        <>
            <div className="w-full flex flex-col items-center bg-[#002561]">
                <div className='container mx-auto flex flex-col items-center border-r-2 border-l-2 border-dashed border-[#A9B8D5] py-10'>
                    {/* Top Image Section */}
                    <div className="w-full py-8 flex justify-center">
                        <div className="relative w-full max-w-[700px] h-[300px]">
                            <Image
                                src="/admissions/scholarship/conditions_for_scholarship.png"
                                alt="conditions for scholarship"
                                fill
                                className="object-contain md:px-0 px-4"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Text Section */}
            <div className="container mx-auto py-10 text-gray-800 space-y-6 px-4 md:px-0">
                {scholarshipConditions.map((condition, index) => (
                    <p
                        key={index}
                        className={
                            condition.startsWith('**')
                                ? 'font-bold text-black'
                                : ''
                        }
                    >
                        {condition.replace(/\*\*/g, '')}
                    </p>
                ))}
            </div>
        </>
    );
};

export default ConditionsForScholarship;
