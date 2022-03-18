import React from "react";
import Integration from "../components/B2B/Integration";
import Cta from "../components/B2B/Cta";
import FAQ from "../components/B2B/FAQ";
import Cta2 from "../components/B2B/Cta2";
import Incentives from "../components/B2B/Incentives";

function Ctacampaign() {
  return (
    <div className="Home">
      <Cta />
      <Incentives />
      <Integration />
      <FAQ />
      <Cta2 />
    </div>
  );
}

export default Ctacampaign;
