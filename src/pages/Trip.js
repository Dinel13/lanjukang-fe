import React from "react";
import CartTrip from "../components/trip/CartTrip";
export default function IndexPage() {
  return (
    <div className="mx-auto container py-8">
      <div className="flex flex-wrap items-center lg:justify-between justify-center">
        <CartTrip />
        <CartTrip />
        <CartTrip />
        <CartTrip />
      </div>
    </div>
  );
}
