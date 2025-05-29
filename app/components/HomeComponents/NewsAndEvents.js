import Image from 'next/image'
import React from 'react'

const NewsAndEvents = () => {
    return (
        <>
            <div className='w-full flex flex-col justify-center items-center py-10'>
                <div className='container flex flex-col gap-10'>
                    <div className='flex flex-col items-center'>
                        <Image src="/home/news-and-events.png" className='text-center' alt='news and events' width={500} height={100} />
                    </div>

                    <div className='bg-[#2050B1] flex flex-col'>
                        <div className="flex flex-col md:flex-row md:border-b md:border-dashed md:border-white ">
                            {/* Left 50% */}
                            <div className="w-full md:w-1/2 md:border-r md:border-dashed md:border-white flex flex-col items-center">
                                <p className="font-schabo text-4xl md:text-[80px] text-[#66A4F9] leading-tight p-4 pb-0">
                                    STORIES IN THE <br className='md:flex hidden' /> MAKING
                                </p>
                            </div>

                            {/* Right 50% */}
                            <div className="w-full md:w-1/2  flex flex-col justify-center items-center p-4">
                                <p className='text-white md:w-[60%] font-tthoves-light'>
                                    At AYRA, every day brings something new—ideas sparked, milestones reached, and bold steps taken. From academic announcements to student-led initiatives and expert-led panels, this is where our story unfolds in real time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsAndEvents
