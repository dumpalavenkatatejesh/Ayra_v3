"use client";
import Image from "next/image";
import React from "react";

const cardData = [
  {
    bgColor: "bg-white",
    image: "/sports-and-wellness/dumbell.png",
    title: (
      <>
        HIGH-PERFORMANCE <br /> GYM
      </>
    ),
    description:
      "Equipped with strength, cardio, and recovery zones for all levels of fitness",
  },
  {
    bgColor: "bg-[#F1F1F2]",
    image: "/sports-and-wellness/vest-shoes.png",
    title: "MULTI-SPORT INFRASTRUCTURE",
    description:
      "Cricket nets, basketball courts, football fields, indoor sports arenas, and more",
  },
  {
    bgColor: "bg-white",
    image: "/sports-and-wellness/dumbell.png",
    title: (
      <>
        EXPERT <br /> SUPPORT
      </>
    ),
    description:
      "Trained physiotherapists, nutritionists, and mental health professionals on campus",
  },
  {
    bgColor: "bg-[#F1F1F2]",
    image: "/sports-and-wellness/vest-shoes.png",
    title: (
      <>
        WELLNESS LABS & <br /> LEARNING SPACES
      </>
    ),
    description:
      "Integrated with the curriculum for students of Sports Sciences and Coaching",
  },
];

const CardSection = () => {
  return (
    <div className="border-b-2 border-dashed border-[#A9B8D5] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 container mx-auto p-5">
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
            className={`relative ${card.bgColor} flex flex-col items-start justify-start p-6 border border-[#D0E3FF] mx-auto mb-10 curved-shadow`}
          >
            <Image src={card.image} width={80} height={80} alt="icon" />
            <h2 className="text-xl font-bold text-[#2050B1] mt-4 ">
              {card.title}
            </h2>
            <p className="pt-4">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
