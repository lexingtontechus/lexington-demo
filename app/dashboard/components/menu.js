"use client";
import Link from "next/link";

import {
  AiTwotoneHome,
  AiFillDashboard,
  AiOutlineAreaChart,
  AiOutlineStock,
  AiFillShop,
} from "react-icons/ai";
import {FaNewspaper} from "react-icons/fa6";

const DashboardMenu = () => (
  <div className="mx-auto mt-4">
    <ul className="menu bg-base-200 menu-horizontal rounded-box">
      <li className="tooltip" data-tip="Home">
        <Link href="/">
          <AiTwotoneHome className="h-5 w-5 fill-zinc-200" />
          Home
        </Link>
      </li><li className="tooltip" data-tip="Dashboard">
        <Link href="/dashboard">
          <AiFillDashboard className="h-5 w-5 fill-primary" />
          Dashboard
        </Link>
      </li>
      <li className="tooltip" data-tip="Markets">
        <Link href="/dashboard/markets">
          <AiOutlineStock className="h-5 w-5 fill-emerald-700" />
          Markets
        </Link>
      </li>
      <li className="tooltip" data-tip="Statistical Analysis">
        <Link href="/dashboard/stats">
          <AiOutlineAreaChart className="h-5 w-5 fill-sky-700" />
          Stats
        </Link>
      </li>
      <li className="tooltip" data-tip="Products">
        <Link href="/dashboard/news">
          <FaNewspaper className="h-5 w-5 fill-red-700" />
          News
        </Link>
      </li>
      <li className="tooltip" data-tip="Products">
        <Link href="/dashboard/products">
          <AiFillShop className="h-5 w-5 fill-purple-700" />
          Products
        </Link>
      </li>
    </ul>
  </div>
);
export default DashboardMenu;
