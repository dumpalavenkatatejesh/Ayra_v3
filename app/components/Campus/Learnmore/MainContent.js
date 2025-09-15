import React from "react";
import LearnMore from "../LearnMore";

const MainContent = () => {
  return (
    <div>
      <div className="border-t-2 border-b-2 mb-10  border-dashed border-[#D0E3FF]">
        <div className="container mx-auto p-5 border-l-2 border-r-2 border-dashed border-[#D0E3FF] flex items-center justify-center flex-col gap-5">
          <p className="p-5 font-tthoves-bold lg:text-3xl text-xl">
            <LearnMore />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
