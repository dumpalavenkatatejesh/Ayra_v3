import React from 'react';

const LearnByDoing = () => {
    return (
        <div className='w-full px-8 py-4'>
            <div className="bg-[url('/admissions/placements/learn_by_doing.png')] h-[90vh] bg-cover bg-center text-white relative " >
                <div className='flex flex-row w-full h-full'>
                    {/* Left section - 70% */}
                    <div className='w-[70%] relative'>
                        {/* You can add content for the left side here if needed */}
                    </div>

                    {/* Right section - 40% */}
                    <div className='w-[40%] flex items-end pb-28'>
                        <div className="space-y-6 pr-12">
                            <p className="text-[1vw] leading-relaxed font-light">
                                AYRA was founded with a bold vision: to be an open canvas where curiosity meets possibility.
                                At AYRA, we don't just prepare — we empower them to shape it.
                            </p>
                            <p className="text-[1vw] leading-relaxed font-light">
                                We believe that education must be as dynamic as the world our students will enter.
                                That's why we've designed a university experience that blends academic rigour with
                                creative exploration, personal growth with global relevance, and tradition with bold,
                                future-facing thinking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnByDoing;
