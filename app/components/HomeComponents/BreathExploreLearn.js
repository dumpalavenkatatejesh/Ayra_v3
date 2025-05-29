import React from 'react'

const BreathExploreLearn = () => {
    return (
        <>
            <div className="bg-[url('/home/breath-explore-learn.png')] h-[90vh] bg-cover bg-center flex flex-row justify-center items-end p-4 lg:p-0">
                <div className='container'>
                    <p className='font-schabo lg:text-[100px] text-[50px] text-white text-center leading-tight'>
                        BREATHE, EXPLORE, LEARN. <br />IN THE SHADOW OF THE NANDI HILLS.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center items-end p-4 lg:p-0">
                <div className='container lg:w-[80%] text-center py-10'>
                    <p>
                        AYRA is nestled in a lush, elevated landscape just outside Bengaluru—overlooking the Nandi Hills range to the southwest and surrounded by verdant stretches of green to the north and east.
                    </p>

                    <p className='font-tthoves-medium text-[24px]'>
                        More than just a campus, it’s a space to think deeply, live mindfully, and grow freely.
                    </p>

                    <div className='flex md:flex-row flex-col justify-center items-center gap-10'>
                        <div className="group inline-block">
                            <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Take a Virtual Campus Tour
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div>
                        <div className="group inline-block">
                            <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Plan Your Visit
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div>
                        <div className="group inline-block">
                            <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Explore the Region
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BreathExploreLearn
