import React from "react";
import Founders from "../components/aboutus/Founders";
import Whoweare from "../components/whoweare/Whoweare";
import EcosystemPage from "./EcosystemPage";
import GetstartedPage from "./GetstartedPage";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage";
import WorkPage from "./WorkPage";

function Home() {
  return (
    <>
      <LandingPage />
      <ServicePage />
      <Whoweare />
      <EcosystemPage />
      <WorkPage />
      <GetstartedPage />
      <Founders />
    </>
  );
}

export default Home;
