import React from "react";
import Integration from "../components/B2B/Integration";
import Cta from "../components/B2B/Cta";
import Stats from "../components/B2B/Stats";

function Ctacampaign() {
  return (
    <div className="Home">
      <Cta />
      <Stats />
      <Integration />
    </div>
  );
}

export default Ctacampaign;
