import React from 'react'
import Image from 'next/image'
import { HoverButton5 } from '../../../utils/HoverButton';


const TheAyraEdge = () => {
    return (

        <>
            <div className='bg-[#002560] pb-10 md:px-0 px-4'>
                {/* Text and first image container */}
                <div className="w-full flex flex-col items-center border-b border-dashed border-[#879BBE]">
                    <div className="relative w-full max-w-[600px] h-[250px]">
                        <Image
                            src="/admissions/placements/the_ayra_edge.png"
                            alt="merit-scholarship"
                            fill
                            className="object-contain mt-4"
                            priority
                        />
                    </div>
                </div>
                <div className="text-white text-center flex flex-col items-center gap-4 py-5">
                    <p className="font-light max-w-5xl">
                        What sets our Placement & Internship Centre apart is our commitment to each student’s unique journey. Our work is tailored, proactive, and aligned with AYRA’s open canvas philosophy—helping students discover and unlock their potential through meaningful career pathways.
                    </p>
                    <p className="text-2xl font-light max-w-5xl">
                        Ready to take the next step? We’re here to walk with you, every step of the way.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="border border-dashed border-gray-300 bg-white px-6 py-1 text-[#2050B1]">
                            Get Career Support
                        </div>
                        <div className="border border-dashed border-gray-300 bg-white px-6 py-1 text-[#2050B1]">
                           Explore Placement Resources
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default TheAyraEdge
