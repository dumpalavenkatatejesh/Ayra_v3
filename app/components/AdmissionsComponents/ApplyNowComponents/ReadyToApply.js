import Image from "next/image";
import React from "react";

const ReadyToApply = () => {
  return (
    <div>
      <div className="container mx-auto my-10 ">
        <Image
          src="/admissions/apply-now/ready-to-apply.png"
          alt="ready to apply"
          width={500}
          height={500}
          className="p-5 lg:p-0"
        />
      </div>
    </div>
  );
};

export default ReadyToApply;
