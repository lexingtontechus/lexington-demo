"use client";
import Link from "next/link";
import Image from "next/image";
import {
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { AiOutlineLogin } from "react-icons/ai";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase">
    <div className="flex-1">
      <div className="avatar">
        <div className="p-0 h-10 w-10">
          <Link href="/">
            <Image
              loader={logoImage}
              src="/logo_lxt.svg"
              width={16}
              height={16}
              alt="Lexington Tech"
            />
          </Link>
        </div>
      </div>
    </div>

    <SignedIn
      routing="path"
      redirectUrl="/dashboard"
      afterSignUpUrl="/dashboard"
      afterSignInUrl="/dashboard"
      className="btn btn-sm btn-secondary mask mask-hexagon"
    >
      {/* Mount the UserButton component */}
      <UserButton className="btn btn-sm btn-secondary mask mask-hexagon" />
    </SignedIn>
    {/* Signed out users get sign in button */}
    <SignedOut>
      <SignInButton
        mode="modal"
        routing="path"
        redirectUrl="/dashboard"
        afterSignUpUrl="/dashboard"
        afterSignInUrl="/dashboard"
      >
        <button className="btn btn-sm btn-secondary mask mask-hexagon">
          <AiOutlineLogin />
        </button>
      </SignInButton>
    </SignedOut>
    <div className="ml-2">
      <Switch />
    </div>
  </div>
);

export default Header;

function Connect() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 512 512"
      className="fill-neutral hover:fill-accent"
    >
      <path d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );
}
