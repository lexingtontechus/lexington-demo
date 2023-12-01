"use client";
import Link from "next/link";
import DemoLink from "./components/demolink";
//import PopupWidget from "./components/popupWidget";

import TechStack from "./components/techstack";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold uppercase py-4">
              Lexington Tech Demo
            </h1>

            <h2 className="text-3xl font-bold uppercase py-4">
              High performance scalable full-stack Web applications
            </h2>
            <div className="py-4">
              <button className="btn uppercase w-64">
                <Link href="/payments">View Our Products</Link>
              </button>
            </div>
            <div className="py-4">
              <TechStack />
            </div>
            <div className="py-4">
              <DemoLink />
            </div>
            <div className="py-4">
              Powered by{" "}
              <Link
                href="https://lexingtontech.us"
                target="_blank"
                className="font-bold text-primary uppercase"
              >
                Lexington Tech
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
