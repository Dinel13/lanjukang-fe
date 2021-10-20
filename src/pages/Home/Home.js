import React from "react";
import Hero from "./HeroView";
import BecomePartner from "./BecomePartnerView";
import Layanan from "./Layanan";
import PopularService from "./PopularService";

export default function Home() {
  return (
    <div>
      <Hero />
      <Layanan />
      <PopularService />
      <BecomePartner />
    </div>
  );
}
