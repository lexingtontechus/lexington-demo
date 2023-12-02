import Script from "next/script";
import Link from "next/link";

export default function LemonSqueezy() {
  return (
    <div className="flex flex-wrap flex-grow gap-8 content-center justify-center mx-auto">
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            src="/FreeConsultingSession.png"
            alt="Free Consulting"
            className="image-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Free Consulting</h2>
          <p>
            Introduction to Lexington Tech. Getting to know your business &
            products. 30min session. Book now!
          </p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/fdaab53a-135b-4ecb-8db1-1810c2ae000e?embed=1"
                className="lemonsqueezy-button"
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img
            src="/StartUpAccelerator.png"
            alt="StartUp Accelerator Program"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">StartUp Accelerator Program</h2>
          <p>Accelerator Program To Launch Your Company or Next Big Product!</p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/30fe2f0d-5262-4c0e-ae15-baac7de9b0ec?embed=1"
                className="lemonsqueezy-button"
              >
                Start Trial
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img src="/ConsultingManagement.png" alt="Consulting Management" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Consulting Management</h2>
          <p>Consulting strategy & product management services.</p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/b9282da0-44db-42d8-98e4-1ce0b0934dd2?embed=1"
                className="lemonsqueezy-button"
              >
                Start Trial
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img src="/ProjectManagement.png" alt="Project Management" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project Management</h2>
          <p>
            Project development & support of custom platforms for your business.
            Integration with business critical systems like Accounting, HR,
            Inventory etc
          </p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/9e599f2a-4a56-4154-b267-d6e04a48e07a?embed=1"
                className="lemonsqueezy-button"
              >
                Start Trial
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img src="/BusinessElevation.png" alt="Business Elevation" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Business Elevation</h2>
          <p>
            Grow your business through our social eCommerce network
            opportunities. Discover & establish new markets to elevate!
          </p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/53cae681-adf9-4165-af48-4bc219bf4653?embed=1"
                className="lemonsqueezy-button"
              >
                Start Trial
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-96 bg-base-200 shadow-xl">
        <figure>
          <img src="/WEB3StarterKit.png" alt="WEB3 Starter Kit" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">WEB3 Starter Kit</h2>
          <p>Upgrade your web technologies & presence to WEB3 standards.</p>
          <Script src="https://assets.lemonsqueezy.com/lemon.js" />
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link
                href="https://lexington.lemonsqueezy.com/checkout/buy/71e5a43d-2da4-4aba-b74b-9ecadf9dd9e8?embed=1"
                className="lemonsqueezy-button"
              >
                Start Trial
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
