"use client";
//Load Stripe No-Code product subcription table

import Script from "next/script";

const PubKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

export default function Stripe() {
  return (
    <div className="min-h-screen justify-between">
      <div className="text-center">
        <div className="mx-auto">
          <h1 className="text-5xl font-bold uppercase py-4">
            Stripe Payments Integration
          </h1>
          <h2 className="text-3xl font-bold uppercase py-4">
            Stripe Elements UI + Checkout
          </h2>
          <p className="text-xl font-bold uppercase py-4">
            This is a demo of Stripe configured products built with Stripe
            Elements UI. The Stripe Customer Portal supports customer
            self-service to manage product subscriptions.
          </p>
          <Script async src="https://js.stripe.com/v3/pricing-table.js" />
          <stripe-pricing-table
            pricing-table-id="prctbl_1OGTurKk5GPl9dsfscNRngJA"
            publishable-key={PubKey}
          ></stripe-pricing-table>
        </div>
      </div>
    </div>
  );
}
