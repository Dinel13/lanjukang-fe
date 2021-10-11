import React from "react";
import Hero from "./HeroView";
import PopularDest from "./PopularDestView";
import BecomePartner from "./BecomePartnerView";
import Layanan from "./Layanan";

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <PopularDest />
      <BecomePartner />
    </div>
  );
}
