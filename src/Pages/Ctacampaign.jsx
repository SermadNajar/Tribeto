import React from "react";
import Integration from "../components/B2B/Integration";
import Incentives from "../components/B2B/Incentives";
import Cta from "../components/B2B/Cta";

function Ctacampaign() {
  return (
    <div className="Home">
      <Cta />
      <Integration />
      <Incentives />
    </div>
  );
}

export default Ctacampaign;
