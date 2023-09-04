"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function DashboardLink() {
  const { isSignedIn, user } = useUser();
  return (
    <>
      {isSignedIn ? (
        <>
          <button className="btn w-64"><Link href="/dashboard">Go To Dashboard</Link></button>
        </>
      ) : (
        <div className="text-2xl uppercase">Connect To Access The Demo</div>
      )}
    </>
  );
}
