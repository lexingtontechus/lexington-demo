import Link from "next/link";
export const metadata = {
  title: "Terms",
};

export default function Terms() {
  return (
    <div>
      <div className="hero min-h-screen svg-background">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Terms</h1>
            <h2 className="text-2xl font-semibold py-6">
              The terms of service covers acceptable use, limitations of
              liability, intellectual property ownership, and fees and charges.
            </h2>
            <h3 className="text-2xl font-semibold py-6">
              Last Updated 1 Jan {new Date().getFullYear()}
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 min-h-[300px]">
        <div
          tabIndex={0}
          className="collapse  collapse-arrow bg-accent text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md"
        >
          <div className="collapse-title">General Terms & Conditions</div>
          <div className="collapse-content text-xs">
            <p>
              The definition of the Terms of Service in connection with the use
              of our services.
            </p>
            <p>
              These Terms of Use constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity (“you”)
              and Lexington Tech LLC, doing business as Lexington Tech
              (“Lexington Tech“, “we”, “us”, or “our”), concerning your access
              to and use of the http://www.lexingtontech.us website as well as
              any other media form, media channel, mobile website or mobile
              application related, linked, or otherwise connected thereto
              (collectively, the “Site”). The Site provides an online
              marketplace for the following goods, products, and/or services:
              Consulting, management & business services (the “Marketplace
              Offerings”). In order to help make the Site a secure environment
              for the purchase and sale of Marketplace Offerings, all users are
              required to accept and comply with these Terms of Use. You agree
              that by accessing the Site and/or the Marketplace Offerings, you
              have read, understood, and agree to be bound by all of these Terms
              of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN
              YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND/OR THE
              MARKETPLACE OFFERINGS AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md"
        >
          <div className="collapse-title">INTELLECTUAL PROPERTY RIGHTS</div>
          <div className="collapse-content text-xs">
            <p>
              Unless otherwise indicated, the Site and the Marketplace Offerings
              are our proprietary property and all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics on the Site (collectively, the
              “Content”) and the trademarks, service marks, and logos contained
              therein (the “Marks”) are owned or controlled by us or licensed to
              us, and are protected by copyright and trademark laws and various
              other intellectual property rights and unfair competition laws of
              the United States, international copyright laws, and international
              conventions. The Content and the Marks are provided on the Site
              “AS IS” for your information and personal use only. Except as
              expressly provided in these Terms of Use, no part of the Site or
              the Marketplace Offerings and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission. Provided
              that you are eligible to use the Site, you are granted a limited
              license to access and use the Site and to download or print a copy
              of any portion of the Content to which you have properly gained
              access solely for your personal, non-commercial use. We reserve
              all rights not expressly granted to you in and to the Site, the
              Content and the Marks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
