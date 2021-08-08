import React from "react";
import NavView from "./NavView";
import Hero from "./HeroView";
import PopularDest from "./PopularDestView";
import BecomePartner from "./BecomePartnerView";

export function HomeContainer() {
  return (
    <div>
      <NavView />
      <Hero />
      <PopularDest />
      <BecomePartner />
    </div>
  );
}
