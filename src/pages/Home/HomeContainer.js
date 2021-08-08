import React from "react";
import Hero from "./HeroView";
import PopularDest from "./PopularDestView";
import BecomePartner from "./BecomePartnerView";

export function HomeContainer() {
  return (
    <div>
      <Hero />
      <PopularDest />
      <BecomePartner />
    </div>
  );
}
