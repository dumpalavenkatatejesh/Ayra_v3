'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../utils/Breadcrumbs'


const Banner = () => {

    return (
        <>
          <div className="relative w-full bg-[#2050B2] m-0 p-0">
                {/* Desktop Image */}
                <div className="hidden md:block w-full">
                    <Image
                        src="/admissions/bachelors_programs/bachelor_banner.png"
                        alt="Bachelor Program Desktop Banner"
                        width={1920}
                        height={1080}
                        className="object-cover object-center w-full lg:h-[90vh]"
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block md:hidden w-full">
                    <Image
                        src="/admissions/bachelors_programs/bachelor_mob_banner.png"
                        alt="Bachelor Program Mobile Banner"
                        width={800}
                        height={1000}
                        className="w-full h-auto align-top"
                        priority
                    />
                </div>
            </div>
        <div className='container mx-auto md:px-0 px-4'>
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: "Bachelor's Programs", href: '/bachelors-programs' }, 
        ]} />
      </div>
        </>
    );
};

export default Banner;
