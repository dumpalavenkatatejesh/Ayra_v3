import React from 'react'
import Image from 'next/image'
import { HoverButton5 } from '../../../utils/HoverButton';


const StartYourJourney = () => {
    return (

        <>
            <div className='bg-[#002560] md:py-10 py-5 md:px-0 px-4'>
                {/* Text and first image container */}
                <div className="w-full flex flex-col items-center border-b border-dashed border-[#879BBE]">
                    <div className="relative w-full max-w-[900px] md:h-[200px] h-[100px]">
                        <Image
                            src="/admissions/bachelors_programs/start_your_journey.png"
                            alt="merit-scholarship"
                            fill
                            className="object-contain mt-4"
                            priority
                        />
                    </div>
                </div>
                <div className="text-white text-center flex flex-col items-center gap-4 py-5">
                    <p className="md:text-2xl text-xl font-light max-w-3xl">
                        AYRA’s Bachelor’s programs are built to give you the space, support, and structure to grow—intellectually, personally, and professionally.
                    </p>
                    {/* <HoverButton5 text="Know More" /> */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="border border-dashed border-gray-300 bg-white px-6 py-1 text-[#2050B1]">
                            Know More
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StartYourJourney
