import React from 'react'
import Image from 'next/image'
import { offerings } from '../../../utils/DistinctForYouData/DistinctForYouData'

const WhatWeOffer = () => {
    return (
        <>
            <div className='bg-[#2050B1] md:px-0 px-4'>
                {/* Text and first image container */}
                <div className="w-full flex flex-col items-center">
                    <div className="relative w-full max-w-[600px] h-[250px]">
                        <Image
                            src="/admissions/placements/what_we_offer.png"
                            alt="merit-scholarship"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full py-4 px-8">
                <Image
                    src="/admissions/placements/team_img.png"
                    alt="merit-scholarship"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />
                {/* Offerings Grid */}
                <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-8 container mx-auto">
                    {offerings.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-4 border-r border-dashed border-gray-300 md:last:border-r-0 pr-4"
                        >
                            <h3 className="text-[#2050B1] text-2xl font-semibold leading-snug">
                                {item.title.split('/n').map((line, i) => (
                                    <span key={i}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </h3>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WhatWeOffer
