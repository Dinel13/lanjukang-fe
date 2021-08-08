import React from "react";
import Hero from "./HeroView";
import PopularDest from "./PopularDestView";
import BecomePartner from "./BecomePartnerView";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularDest />
      <BecomePartner />
    </div>
  );
}
