import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('/admissions/scholarship/scholarship_banner.png')] h-[90vh] bg-cover bg-center text-white flex flex-col justify-between px-12 py-10">

            {/* Rotated tagline - mid-lower position */}
            <div className="flex flex-1 items-end">
                <div className="rotate-[-12deg] md:pl-64 pb-5">
                    <p className="text-base font-light opacity-90 text-[1vw]">
                        Supporting Your Journey. Investing in Your Potential.
                    </p>
                </div>
            </div>

            {/* Bottom paragraph */}
            <div className="flex justify-start md:pl-56">
                <div className="w-[50%] text-start opacity-90">
                    <p className="text-base font-light text-[1vw]">
                        In our endeavour to encourage and support meritorious and deserving students achieve their aspirations,
                        we offer many merit-based scholarships and need-based financial support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
