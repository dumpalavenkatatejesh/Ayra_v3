import React from "react";
import Image from "next/image";
import Scroll from "./Scroll";
import { ctlOfferData } from "../../utils/CtlOfferData/ctlOfferData";

const CTLOffer = () => {
  return (
    <>
      <div className="container mx-auto md:py-8">
        {/* Header Image */}
        <div className="md:w-[40%] px-4 md:px-0">
          <h2 className="highlight-heading tracking-wider font-schabo text-[#002561]">
            WHAT THE CTL WILL OFFER:
          </h2>
        </div>
        {/* for desktop */}
        <div className=" flex justify-center items-center">
          <Image
            src="/teaching-and-learning/ctl-offer.png"
            alt="Center for Teaching and Learning"
            width={1000}
            height={600}
            className="md:w-[60%] h-full object-cover md:-mt-20 md:px-10 lg:py-0 py-5 hidden lg:block"
            priority
          />
        </div>
        {/* for mobile */}
        <div className=" flex justify-center items-center lg:hidden">
          <Image
            src="/teaching-and-learning/ctl-offer-mobile.svg"
            alt="Center for Teaching and Learning"
            width={1000}
            height={1000}
            className="w-full h-full md:-mt-20 md:px-10 lg:py-0 py-5 p-5"
            priority
          />
        </div>
        <div className="lg:hidden">
          <ul className="mt-4 space-y-3 text-gray-700 p-5">
            {ctlOfferData.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src={item.icon}
                  alt="Bullet Icon"
                  width={16}
                  height={16}
                  className="mt-1 rotate-[50deg]"
                />
                <span className="text-[#000000] font-tthoves-light">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Image */}
        {/* <div className=" my-8">
          <Image
            src="/teaching-and-learning/CTL-image.png"
            alt="Center for Teaching and Learning"
            width={1920}
            height={600}
            className="w-full h-full"
            priority
          />
        </div> */}

        {/* Scr ollable Paragraphs */}
        {/* <Scroll /> */}
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#002561] text-white py-8  text-sm md:text-2xl px-2 md:px-0 flex items-center justify-center border-b border-gray-300 border-dashed">
        <p className="text-large   text-center md:max-w-6xl font-tthoves-light ">
          For learners and educators who believe in growing together, the Centre
          for Teaching & Learning is your space to evolve.
          {/*  add a line break after the word "evolve" */}
        </p>
      </div>
    </>
  );
};

export default CTLOffer;
