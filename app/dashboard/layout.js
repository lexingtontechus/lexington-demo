"use client";
import {
  useSession,
  useUser,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import DashboardMenu from "./components/menu";
import { redirect } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { isSignedIn, isLoading, user } = useUser();

  if (!isSignedIn) {
    redirect("/");
  }

  return (
    <div className="container grid place-content-center px-8 mx-auto mb-8">
      <DashboardMenu />
      {children}
    </div>
  );
}
