import React from "react";

const SobBanner = () => {
  return (
    <div className="relative w-full h-screen md:h-[90vh] overflow-hidden">
      {/* Mobile Banner (for small screens) */}
      <div className="block md:hidden">
        <img
          src="/schools/school-of-business/business-mobile.png"
          alt="School of Business Mobile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Desktop Banner (for medium and larger screens) */}
      <div className="hidden md:block">
        <img
          src="/schools/school-of-business/school-of-business.png"
          alt="School of Business Desktop Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SobBanner;
