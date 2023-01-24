"use client";
import Link from "next/link";
import {
  SignInButton,
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
//import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import Switch from "./switchtheme";

const logoImage = ({ src, width, quality }) => {
  return `https://storageapi.fleek.co/68ec2807-8eea-4ac4-84f7-af2c0c153109-bucket/lxtgroup-images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

const Header = () => (
  <div className="navbar flex justify-between px-4 whitespace-normal uppercase">
    <div className="flex-1">
      <div className="avatar py-2">
        <div className="w-10 h-10">
          <Link href="/">
            <img src="/logo_lxt.svg" />
          </Link>
        </div>
      </div>
    </div>

    <SignedIn>
      {/* Mount the UserButton component */}
      <UserButton />
    </SignedIn>
    {/* Signed out users get sign in button */}
    <SignInButton mode="modal">
      <button className="btn btn-secondary mask mask-hexagon">
        <Connect />
      </button>
    </SignInButton>
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
