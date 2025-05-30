import Image from 'next/image'
import React from 'react'
import { campusLife } from '../../utils/HomeData'

const CampusLife = () => {
    return (
        <>
            <div className="w-full flex flex-col-reverse md:flex-row">
                {/* Left 50% - Text Section */}
                <div className="w-full md:w-1/2 bg-[#2050B1] text-white flex items-center justify-center p-6 md:p-10">
                    <div className="max-w-xl flex flex-col">
                        <div className='border-b-2 border-dashed boder-[#FFFFFF] flex flex-col gap-4 py-4'>
                            <p className="font-schabo text-4xl text-[80px]  text-[#66A4F9]">
                                CAMPUS LIFE
                            </p>
                            <p className="text-xl md:text-2xl font-bold ">Vibrant. Inclusive. Student-Driven.</p>
                        </div>

                        <div className='mt-4 flex flex-col gap-10'>
                            <div>
                                <p className=" md:w-[70%] font-tthoves-light">
                                    From student clubs to weekend treks, campus media labs to yoga mornings—AYRA is where you’ll discover more than just academics.
                                </p>
                            </div>
                            <div>
                                <ul className="space-y-3 text-white">
                                    {campusLife.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Image
                                                src={item.icon}
                                                alt="Bullet Icon"
                                                width={16}
                                                height={16}
                                                className="mt-1 rotate-[50deg]"
                                            />
                                            <span className='font-tthoves-light'>{item.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="group inline-block">
                                <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                    See Campus Life
                                    <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#2050B1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                    <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Right 50% - Image Section */}
                <div
                    className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
                    style={{ backgroundImage: "url('/home/campus-life.jpg')" }}
                />
            </div>


        </>
    )
}

export default CampusLife
