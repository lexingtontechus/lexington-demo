export const metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const d = new Date();
  return (
    <div className="mx-auto px-8 grid grid-flow-row auto-rows-max justify-center">
      <div className="m-4">
        <h1 className="text-4xl font-bold uppercase py-2 text-primary">
          Sales Widget
        </h1>
        <h2 className="text-xl font-bold uppercase py-2">
          {monthNames[d.getMonth()]} {new Date().getFullYear()}
        </h2>
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat">
            <div className="stat-title">Total Sales</div>
            <div className="stat-value">$200K</div>
            <div className="stat-desc">↗︎ $12k (14%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">Gross Profit</div>
            <div className="stat-value">$89K</div>
            <div className="stat-desc">↗︎ $22k (11%)</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="none"
                className="inline-block w-8 h-8 stroke-current fill-current"
              >
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
              </svg>
            </div>
            <div className="stat-title">Net Profit</div>
            <div className="stat-value">$31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="none"
                className="inline-block w-8 h-8 stroke-current fill-current"
              >
                <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z" />
              </svg>
            </div>
            <div className="stat-title">YTD</div>
            <div className="stat-value">$570K</div>
            <div className="stat-desc">
              January - {monthNames[d.getMonth()]}
            </div>
          </div>
        </div>
      </div>

      <div className="m-4">
        <h1 className="text-4xl font-bold uppercase py-2 text-primary">
          Portfolio Widget
        </h1>
        <h2 className="text-xl font-bold uppercase py-2">
          {monthNames[d.getMonth()]} {new Date().getFullYear()}
        </h2>
        <div className="stats stats-vertical lg:stats-horizontal bg-primary text-primary-content">
          <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions join">
              <button className="btn btn-sm join-item">Withdrawal</button>
              <button className="btn btn-sm join-item">Deposit</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Win/Loss</div>
            <div className="stat-value">1792/386</div>
            <div className="stat-desc">82.77%</div>
          </div>
        </div>
      </div>

      <div className="m-4">
        <h1 className="text-4xl font-bold uppercase py-2 text-primary">
          Analytics Widget
        </h1>
        <h2 className="text-xl font-bold uppercase py-2">
          {monthNames[d.getMonth()]} {new Date().getFullYear()}
        </h2>
        <div className="stats stats-vertical lg:stats-horizontal bg-neutral">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-neutral-content">Views</div>
            <div className="stat-value text-primary">120.5M</div>
            <div className="stat-desc text-neutral-content">
              14% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title text-neutral-content">Engagements</div>
            <div className="stat-value text-secondary">42.7M</div>
            <div className="stat-desc text-neutral-content">
              41% more than last month
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //fill="none"
                viewBox="0 0 320 512"
                className="inline-block w-8 h-8 stroke-current fill-primary"
              >
                <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
              </svg>
            </div>
            <div className="stat-value text-neutral-content">$78k</div>
            <div className="stat-title text-primary">Monetization</div>
            <div className="stat-desc text-secondary">25% </div>
          </div>
        </div>
      </div>

      <div className="m-4">
        <h1 className="text-4xl font-bold uppercase py-2 text-primary">
          Social Widget
        </h1>
        <h2 className="text-xl font-bold uppercase py-2">
          {monthNames[d.getMonth()]} {new Date().getFullYear()}
        </h2>
        <div className="stats shadow stats-vertical lg:stats-horizontal bg-base-300">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="/user.jpg" />
                </div>
              </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary">31 tasks remaining</div>
          </div>
        </div>
      </div>
    </div>
  );
}
