"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardData = [
  {
    bgColor: "bg-white",
    image: "/home/an-open-canvas.png",
    title: (
      <>
        AN OPEN CANVAS
      </>
    ),
    description:
      "Design your academic journey, explore interdisciplinary learning, and embrace opportunities beyond the classroom.",
    description2:
      "Discover how you can shape your future at AYRA.",
    button:
      "Learn More",
    url:
      "/open-canvas/your-space",
  },
  {
    bgColor: "bg-[#F1F1F2]",
    image: "/home/distinct-for-you.png",
    title: "DISTINCT FOR YOU",
    description:
      "An experience built around your goals, your passions, and your ambitions.",
    description2:
      "See what makes AYRA stand apart.",
    button:
      "Explore Now",
    url:
      "/distinct-for-you/overview",
  },

];

const CardSection = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="container mx-auto md:w-[60%] lg:py-16">
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 container mx-auto">
              <style jsx>{`
          .curved-shadow::before {
            content: "";
            position: absolute;
            z-index: -1;
            width: 93%;
            bottom: 0px;
            height: 30px;
            left: 3%;
            border-radius: 0 0 50% 50%;
            box-shadow: 0px 10px 8px 8px #aac8d2;
          }
        `}</style>

              {cardData.map((card, index) => (
                <div
                  key={index}
                  className={`relative ${card.bgColor} flex flex-col items-start justify-start p-6 lg:gap-6 gap-4 border border-[#D0E3FF] mx-auto curved-shadow`}
                >
                  <div className="lg:h-64 flex justify-center items-center mx-auto">
                    <Image src={card.image} width={180} height={180} alt="icon" />
                  </div>

                  <div>
                    <h2 className=" text-[#002561] md:text-[70px] text-[50px] font-schabo">
                      {card.title}
                    </h2>
                  </div>

                  <div className="lg:h-16">
                    <p >{card.description}</p>
                  </div>
                  <p >
                    {card.description2}
                  </p>

                  <Link href={card.url}>
                    <div className="group inline-block">
                      <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                        {card.button}
                        <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                        <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default CardSection;
