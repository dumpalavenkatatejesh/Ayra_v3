import React from 'react';
import Image from 'next/image';

const OurMission = () => {
    const bulletPoints = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ];

    return (
        <div className="bg-[#002560] text-white font-sans py-12 md:py-24 space-y-12 md:space-y-24">
            <div className='container mx-auto px-4 md:px-6'>
                {/* Vision Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-start">
                        <Image
                            src="/admissions/about/our_vision.png"
                            alt="Our Vision"
                            width={200}
                            height={300}
                            className="w-56 md:w-72 h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 space-y-6 md:space-y-8 flex flex-col justify-end items-center md:items-end">
                        <h2 className="text-xl md:text-xl font-light leading-tight text-center md:text-right">
                            To be a transformative force in higher education—
                            <br />
                            where students don't just follow paths, they create them.
                        </h2>
                        <ul className="space-y-4 font-light w-full md:w-auto">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-start md:items-end gap-3 md:gap-4 text-sm md:text-md px-2 md:px-0 md:me-10">
                                    <Image
                                        src="/rocket-icon.svg"
                                        alt="Bullet"
                                        width={20}
                                        height={20}
                                        className="mt-1 rotate-[50deg] flex-shrink-0 w-4 md:w-5"
                                    />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='border-b border-dashed border-[#A9B8D5]'></div>
            {/* Mission Section */}
            <div className='container mx-auto px-4 md:px-6'>
                <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 md:gap-16">
                    <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
                        <Image
                            src="/admissions/about/our_mission.png"
                            alt="Our Mission"
                            width={500}
                            height={300}
                            className="w-56 md:w-72 h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 space-y-6 md:space-y-8 font-light">
                        <p className="text-xl md:text-2xl leading-relaxed text-center md:text-left">
                            To cultivate lifelong learners, innovative thinkers, and ethical
                            leaders by offering a flexible, interdisciplinary education
                            grounded in academic excellence, critical inquiry, and social
                            responsibility.
                        </p>
                        <ul className="space-y-4 w-full md:w-auto">
                            {bulletPoints.map((point, index) => (
                                <li key={index} className="flex items-start md:items-end gap-3 md:gap-4 text-sm md:text-md px-2 md:px-0 md:me-10">
                                    <Image
                                        src="/rocket-icon.svg"
                                        alt="Bullet"
                                        width={20}
                                        height={20}
                                        className="mt-1 rotate-[50deg] flex-shrink-0 w-4 md:w-5"
                                    />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;
