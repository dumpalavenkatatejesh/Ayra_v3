import Image from "next/image";
import React from "react";

const PartOfYourDailyLife = () => {
  return (
    <div>
      <div className="">
        <div className="border-b-2 border-dashed border-[#D0E3FF] mb-10">
          <div className="relative  lg:max-w-7xl mx-auto my-4">
            {/* Background Image */}

            <div className="h-[500px] md:h-[600px] lg:h-[700px]">
              <Image
                src="/sports-and-wellness/daily-life.png"
                alt="Who Can Apply Background"
                fill
                className="object-cover lg:block hidden"
                priority
              />
            </div>
            <div className="lg:h-auto h-[50vh] w-full">
              <Image
                src="/sports-and-wellness/daily-life-mobile.png"
                alt="Who Can Apply Background"
                fill
                className="lg:hidden p-5"
                priority
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute lg:bottom-20 bottom-0 lg:left-[55%] left-[0%] flex items-center">
              <div className=" text-white p-10">
                <p className="py-5">
                  At AYRA, wellness isn’t an add-on—it’s built into your
                  experience. Morning fitness routines, evening yoga,
                  competitive leagues, and student-run wellness initiatives all
                  contribute to a culture of health, discipline, and joy.
                </p>

                <p>
                  Whether you’re aiming for athletic excellence or building
                  lifelong wellness habits, the Sports & Wellness Centre is here
                  to support your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartOfYourDailyLife;
