import React from "react";
import Banner from "./Banner";
import WhatYouFind from "./WhatYouFind";
import PartOfYourDailyLife from "./PartOfYourDailyLife";
import YourJourneyStartsHere from "./yourJourneyStartsHere";
import CardSection from "./CardSection";
const index = () => {
  return (
    <div>
      <Banner />
      <WhatYouFind />
      <CardSection/>
      <PartOfYourDailyLife />
      <YourJourneyStartsHere />
    </div>
  );
};

export default index;
