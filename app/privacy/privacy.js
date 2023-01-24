import Link from "next/link";
export const metadata = {
  title: "Privacy",
};

export default function Privacy() {
  return (
    <div>
      <div className="hero min-h-screen svg-background">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Privacy</h1>
            <h2 className="text-2xl font-semibold py-6">
              This policy outlines how Lexington Tech LLC stores and uses user
              data that is collected in the course of them visiting your website
              in accordance with General Data Protection Regulation (GDPR) and
              California Consumer Privacy Act (CCPA).
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
          className="collapse collapse-arrow bg-accent text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md"
        >
          <div className="collapse-title">WHAT INFORMATION DO WE COLLECT?</div>
          <div className="collapse-content text-xs">
            <p>
              Personal information you disclose to us In Short: We collect
              personal information that you provide to us. We collect personal
              information that you voluntarily provide to us when you express an
              interest in obtaining information about us or our products and
              Services, when you participate in activities on the Website or
              otherwise when you contact us. The personal information that we
              collect depends on the context of your interactions with us and
              the Website, the choices you make and the products and features
              you use. The personal information we collect may include the
              following: Personal Information Provided by You. We collect names;
              phone numbers; email addresses; job titles; contact preferences;
              and other similar information. All personal information that you
              provide to us must be true, complete and accurate, and you must
              notify us of any changes to such personal information
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse  collapse-arrow bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content my-2 rounded-md"
        >
          <div className="collapse-title">HOW DO WE USE YOUR INFORMATION?</div>
          <div className="collapse-content text-xs">
            <p>
              In Short: We process your information for purposes based on
              legitimate business interests, the fulfillment of our contract
              with you, compliance with our legal obligations, and/or your
              consent. We use personal information collected via our Website for
              a variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations. We indicate the specific processing grounds
              we rely on next to each purpose listed below. We use the
              information we collect or receive: Fulfill and manage your orders.
              We may use your information to fulfill and manage your orders,
              payments, returns, and exchanges made through the Website.
              Administer prize draws and competitions. We may use your
              information to administer prize draws and competitions when you
              elect to participate in our competitions. To deliver and
              facilitate delivery of services to the user. We may use your
              information to provide you with the requested service. To respond
              to user inquiries/offer support to users. We may use your
              information to respond to your inquiries and solve any potential
              issues you might have with the use of our Services. To send you
              marketing and promotional communications. We and/or our
              third-party marketing partners may use the personal information
              you send to us for our marketing purposes, if this is in
              accordance with your marketing preferences. For example, when
              expressing an interest in obtaining information about us or our
              Website, subscribing to marketing or otherwise contacting us, we
              will collect personal information from you. You can opt-out of our
              marketing emails at any time (see the “WHAT ARE YOUR PRIVACY
              RIGHTS?” below). Deliver targeted advertising to you. We may use
              your information to develop and display personalized content and
              advertising (and work with third parties who do so) tailored to
              your interests and/or location and to measure its effectiveness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
