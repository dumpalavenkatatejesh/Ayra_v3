import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HoverButton5 } from '@/app/utils/HoverButton';


const ExploreAyra = () => {
    const points = [
        "Bachelor’s and Master’s",
        "Flexible Academic Pathways",
        "Built-in Internships and Career Support",
        "A Campus Designed for Innovation and Wellbeing"
    ]

    return (
        <div
            className="h-[90vh] bg-cover bg-center flex"
            style={{ backgroundImage: "url('/home/explore-ayra.png')" }}
        >
            {/* Left Dummy Div */}
            <div className="w-[60%]"></div>

            {/* Right Content Div */}
            <div className="w-[40%] flex items-end pb-20">
                <div className="pl-8 pr-4 text-white">
                    <p className="text-4xl font-bold mb-5">Designed for a <br /> Changing World</p>
                    <p className="text-base font-light mb-10">
                        AYRA is built for this moment—and for what comes next.
                    </p>

                    <ul className="space-y-3 mb-5">
                        {points.map((point, index) => (
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

                    {/* <HoverButton5 text="Discover Our Schools" /> */}
                    <div className="group inline-block">
                        <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                            Discover Our Schools
                            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002562] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreAyra
