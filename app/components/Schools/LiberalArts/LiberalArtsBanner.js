import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner (for small screens) */}
      <div className="block md:hidden">
        <img
          src="/schools/liberal-arts/arts-mobile.png"
          alt="Liberal Arts Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner (for medium and larger screens) */}
      <div className="hidden md:block">
        <img
          src="/schools/liberal-arts/liberal-arts-banner.png"
          alt="Liberal Arts Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
