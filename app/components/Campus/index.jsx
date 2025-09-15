import React from "react";
import CampusHeroBanner from "./CampusHeroBanner";
import FutureReadyLearning from "./FutureReadyLearning";
import DesignedForCommunity from "./DesignedForCommunity";
import SustainabilitySection from "./Sustainability";
import Explore from "./Explore";
import Video from "./Video";
import MainContent from "./Learnmore/MainContent";
const index = () => {
  return (
    <>
      <CampusHeroBanner />
      <FutureReadyLearning />
      <DesignedForCommunity />
      <SustainabilitySection />
      <MainContent />
      <Explore />
      <Video />
    </>
  );
};

export default index;
