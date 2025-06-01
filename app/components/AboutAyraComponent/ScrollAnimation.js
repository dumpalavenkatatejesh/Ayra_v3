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

  // Handle desktop wheel and mobile touch
  useEffect(() => {
    const threshold = 100;
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (!insideRef.current) return;

      const atFirst = currentIndexRef.current === 0;
      const atLast = currentIndexRef.current === blocks.length - 1;

      // Prevent scrolling past bounds
      if ((e.deltaY < 0 && atFirst) || (e.deltaY > 0 && atLast)) return;

      e.preventDefault();

      // Only change slide if not currently animating
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;

        // Determine direction based on scroll 
        const nextIndex = e.deltaY > 0
          ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
          : Math.max(currentIndexRef.current - 1, 0);

        setCurrentSlide(nextIndex);
        currentIndexRef.current = nextIndex;

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    };

    const handleTouchStart = (e) => {
      if (!insideRef.current) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!insideRef.current) return;

      const touchEndY = e.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      const atFirst = currentIndexRef.current === 0;
      const atLast = currentIndexRef.current === blocks.length - 1;

      if ((deltaY < 0 && atFirst) || (deltaY > 0 && atLast)) return;

      e.preventDefault();

      // Only change slide if the touch movement is significant and not currently animating
      if (Math.abs(deltaY) >= 50 && !isAnimatingRef.current) {
        isAnimatingRef.current = true;

        const nextIndex = deltaY > 0
          ? Math.min(currentIndexRef.current + 1, blocks.length - 1)
          : Math.max(currentIndexRef.current - 1, 0);

        setCurrentSlide(nextIndex);
        currentIndexRef.current = nextIndex;

        // Reset animation lock after transition
        setTimeout(() => {
          isAnimatingRef.current = false;
        }, 700);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [blocks.length]);

  return (
    <div ref={trackRef} style={{ height: `${blocks.length * 100}vh` }} className="relative">
      <div
        ref={sectionRef}
        className="sticky top-0 h-[100vh] flex flex-col md:flex-row bg-white transition-opacity duration-500"
      >
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex justify-center md:items-center items-end px-4 md:px-6 h-[50vh] md:h-[100vh] bg-white">
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-schabo text-[#2050B1] leading-tight uppercase text-center md:text-start">
            What Sets Us
            <br />
            Apart
          </h2>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] overflow-hidden relative flex items-center justify-center">
          <div className="relative w-full h-full">
            {blocks.map((block, index) => (
              <div
                key={index}
                ref={(el) => (blocksRef.current[index] = el)}
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center px-4 md:px-12 transition-all duration-700 ease-out
                  ${index === currentSlide
                    ? 'opacity-100 translate-x-0'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                style={{
                  transitionProperty: 'opacity, transform',
                  zIndex: index === currentSlide ? 1 : 0,
                }}
              >
                {block.type === 'text' ? (
                  <div className={`max-w-xl px-4 md:px-0 text-center md:text-left transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <h3 className="text-lg sm:text-xl md:text-2xl text-[#2050B1] font-tthoves-bold mb-2 md:mb-4 uppercase">
                      {block.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700">{block.text}</p>
                  </div>
                ) : (
                  <img
                    src={block.src}
                    alt={block.alt}
                    className={`w-full h-auto max-h-[40vh] md:max-h-[80vh] shadow-lg px-4 md:px-0 object-contain transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
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
