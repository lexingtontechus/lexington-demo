"use client";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function DashboardLink() {
  const { isSignedIn, user } = useUser();
  return (
    <>
      {isSignedIn ? (
        <>
          <Link href="/dashboard">Go To Dashboard</Link>
        </>
      ) : (
        <>Connect To Access The Demo</>
      )}
    </>
  );
}
