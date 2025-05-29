import React from 'react'
import Image from 'next/image'

const StudentOutcome = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 py-16 container mx-auto">
            {/* Left Section */}
            <div className="md:w-1/2 space-y-6 ">
                <h1 className="text-4xl md:text-7xl font-schabo text-[#002D72] leading-tight">
                    STUDENT OUTCOMES <br /> WE AIM FOR
                </h1>
                <p className="text-gray-800 text-base md:text-lg">
                    Our ultimate goal is to ensure every AYRA student graduates with a clear path ahead,
                    whether that means a job offer, a startup launch, or admission to a top Master’s program.
                </p>

                <div>
                    <h3 className="font-semibold text-xl mb-4">Typical Outcomes Include:</h3>
                    <ul className="space-y-3 text-gray-700">
                        {[
                            "Full-time job offers through on-campus drives",
                            "Pre-placement offers (PPOs) via internships",
                            "Launching student-led ventures supported by AYRA’s entrepreneurship ecosystem"
                        ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Image src="/rocket-icon.svg" alt="bullet" width={18} height={18} className="mt-1 rotate-[50deg]" />
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
                    className="w-full h-auto rounded-md"
                />
                <p className="text-xs text-white bg-black/60 px-2 py-1 absolute mt-[-30px] ml-2 rounded">
                    iStock · Credit: eyesfoto
                </p>
            </div>
        </div>
    )
}

export default StudentOutcome
