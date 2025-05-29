'use client';

import React, { useEffect, useRef, useState } from 'react';

const TextSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const blocksRef = useRef([]);
  const currentIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const scrollProgressRef = useRef(0);
  const insideRef = useRef(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const blocks = [
    {
      type: 'text',
      title: 'THE OPEN CANVAS PHILOSOPHY',
      text: "At AYRA, students co-create their journey. Whether they want to move faster or slower, specialise or stay broad, we support them in building an education that reflects who they are and who they want to become.",
    },
    {
      type: 'image',
      src: '/admissions/masters_programs/what_set_us.png',
      alt: 'Future Ready',
    },
    {
      type: 'text',
      title: 'Designed Around You',
      text: 'From flexible academic structures to a diverse ecosystem of learning and mentorship, every aspect of Ayra has been built around the evolving needs of young people today.',
    },
    {
      type: 'image',
      src: '/admissions/masters_programs/what_set_us_1.png',
      alt: 'Designed Around You',
    },
    {
      type: 'text',
      title: 'Future-Ready Curriculum',
      text: "With a strong foundation in liberal arts, technology, business, hospitality, and sports sciences, our academic offerings are designed to meet the demands of tomorrow's world - while fostering curiosity, creativity, and critical thought.",
    },
  ];

  // Track scroll to enable/disable internal lock
  useEffect(() => {
    const handleScroll = () => {
      const trackEl = trackRef.current;
      if (!trackEl) return;

      const rect = trackEl.getBoundingClientRect();
      const isInside = rect.top <= 0 && rect.bottom > window.innerHeight;

      insideRef.current = isInside;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle internal transitions (both directions)
  useEffect(() => {
    const handleWheel = (e) => {
      if (!insideRef.current) return;

      const atFirst = currentIndexRef.current === 0;
      const atLast = currentIndexRef.current === blocks.length - 1;

      // If at first or last, allow scroll out
      if ((e.deltaY < 0 && atFirst) || (e.deltaY > 0 && atLast)) return;

      // Prevent scrolling page
      e.preventDefault();

      // Reset progress if scroll direction changes
      if (
        (scrollProgressRef.current > 0 && e.deltaY < 0) ||
        (scrollProgressRef.current < 0 && e.deltaY > 0)
      ) {
        scrollProgressRef.current = 0;
      }

      scrollProgressRef.current += e.deltaY;

      const threshold = 100;

      if (Math.abs(scrollProgressRef.current) >= threshold && !isAnimatingRef.current) {
        isAnimatingRef.current = true;

        let nextIndex =
          scrollProgressRef.current > 0
            ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
            : Math.max(currentIndexRef.current - 1, 0);

        setCurrentSlide(nextIndex);
        currentIndexRef.current = nextIndex;
        scrollProgressRef.current = 0;

        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [blocks.length]);

  return (
    <div ref={trackRef} style={{ height: `${blocks.length * 100}vh` }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex flex-col md:flex-row bg-white transition-opacity duration-500"
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 md:px-6 h-[20vh] md:h-screen md:sticky md:top-0 bg-white pt-10">
          <h2 className="text-6xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-center md:text-start">
            What Sets Us
            <br />
            Apart
          </h2>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden relative">
          <div className="h-full w-full">
            {blocks.map((block, index) => (
              <div
                key={index}
                ref={(el) => (blocksRef.current[index] = el)}
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center px-4 md:px-12 transition-all duration-700 ease-out
                  ${index === currentSlide ? 'opacity-100 translate-x-0' :
                    index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
                  }`}
                style={{
                  transitionProperty: 'opacity, transform',
                  zIndex: index === currentSlide ? 1 : 0
                }}
              >
                {block.type === 'text' ? (
                  <div className="max-w-xl px-4 md:px-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-ebold text-[#2050B1] mb-2 md:mb-4 uppercase">
                      {block.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">{block.text}</p>
                  </div>
                ) : (
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="w-full h-auto max-h-[40vh] md:max-h-[80vh] shadow-lg px-4 md:px-0"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
