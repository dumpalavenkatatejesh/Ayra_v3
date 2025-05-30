import { HoverButton5 } from '@/app/utils/HoverButton';
import React from 'react';

const HomeBanner = () => {
    return (
        <div className="md:bg-[url('/home/new/home_banner_img.jpg')] bg-[url('/home/new/home_mob_banner.jpg')] h-[90vh] bg-cover bg-center text-white relative">
            <div className="flex w-full h-full container mx-auto">
                {/* Left filler section */}
                <div className="md:w-[80%]"></div>

                {/* Right content section - vertical layout */}
                <div className="md:w-[20%] flex flex-col md:justify-between justify-end pt-8 pb-4 px-4 md:px-0">
                    {/* Top content */}
                    <div className="space-y-2 text-left mt-10">
                        <p className="text-sm md:text-[1vw] leading-relaxed font-light">
                            At AYRA, learning is not confined to textbooks and lectures. It’s an evolving journey where you
                            set the pace, define your path, and shape your success.
                        </p>
                    </div>

                    {/* Bottom content */}
                    <div className="space-y-2 text-left pt-3">
                        <p className="text-sm md:text-[1vw] leading-relaxed font-light">
                            Explore bachelor’s and master’s programs designed for limitless possibilities.
                        </p>
                        <HoverButton5 text="Explore More" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
