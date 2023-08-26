"use client";
import Link from "next/link";
import { Badge, BadgeDelta } from "@tremor/react";
import {
  AiFillDashboard,
  AiOutlineAreaChart,
  AiOutlineStock,
} from "react-icons/ai";

const DashboardMenu = () => (
  <div className="mx-auto mt-4">
    <ul className="menu bg-base-200 menu-horizontal rounded-box">
      <li className="tooltip" data-tip="Dashboard">
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
    </ul>
  </div>
);
export default DashboardMenu;
