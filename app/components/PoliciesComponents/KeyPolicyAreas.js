"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import KeyPolicyAreasData from "../../utils/PoliciesData/KeyPolicyAreasData";

const KeyPolicyAreas = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = -rect.top;
      setScrollY(scrollTop);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    // Initial setup
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getOpacity = (index) => {
    if (!windowHeight) return 0;
    const sectionHeight = windowHeight;
    const position = scrollY - index * sectionHeight;
    if (position < 0 || position > sectionHeight) return 0;
    return 1 - Math.abs(position / sectionHeight - 1) * 0; // Customize fade effect if needed
  };

  const getTranslateY = (index) => {
    if (!windowHeight) return 0;
    const sectionHeight = windowHeight;
    const position = scrollY - index * sectionHeight;
    return Math.max(Math.min(position * -0.2, 30), 0);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div style={{ height: `${(KeyPolicyAreasData.length + 1) * 100}vh` }}>
        <div className="sticky top-0 h-[100vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="relative w-full h-full">
            {KeyPolicyAreasData.map((item, index) => {
              const opacity = getOpacity(index);
              return (
                <div
                  key={index}
                  className="absolute text-xl md:text-5xl font-bold text-[#002561] transition-all duration-300 ease-in-out w-full px-4"
                  style={{
                    opacity,
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, calc(-50% + ${getTranslateY(
                      index
                    )}px))`,
                    zIndex: opacity > 0.5 ? 10 : 1,
                    pointerEvents: opacity > 0.1 ? "auto" : "none",
                  }}
                >
                  <div className="flex lg:flex-row flex-col container mx-auto lg:py-8 justify-between lg:gap-10">
                    {/* Image Block */}
                    <div className="w-1/2 lg:mt-0 mt-12 mx-auto lg:mx-0">
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.title || "Policy Image"}
                          layout="responsive"
                          width={900}
                          height={600}
                          className="lg:w-[900px] h-auto object-cover"
                        />
                      )}
                    </div>

                    {/* Text Block */}
                    <div className="flex flex-col w-full lg:w-1/2 lg:py-8 px-4 lg:px-0">
                      <h2 className="text-4xl md:text-6xl py-5 tracking-wide text-[#2050B1] font-schabo leading-tight text-center md:text-left">
                        KEY POLICY AREAS
                      </h2>
                      <h3 className="text-2xl font-tthoves-demibold text-gray-800 lg:mt-10 mt-5">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{item.subtitle}</p>
                      <ul className="list-none pt-4 space-y-3">
                        {item.principles.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Image
                              src="/rocket-icon.svg"
                              alt="Bullet Icon"
                              width={16}
                              height={16}
                              className="mt-1 rotate-[50deg]"
                            />
                            <p className="text-gray-700">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPolicyAreas;
