import Link from "next/link";

export const metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  title: "Home",
};
export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">Lexington Tech Demo</h1>
          <h2 className="py-6 text-2xl font-semibold">
            <Link href="https://nextjs.org" target="_blank">
              NextJS
            </Link>{" "}
            App Router
          </h2>
          <p className="py-6">
            Featuring{" "}
            <Link
              href="https://daisyui.com"
              target="_blank"
              className="text-secondary"
            >
              DaisyUI
            </Link>{" "}
            Next Theme Integration.
          </p>
          <p className="py-6">
            Featuring{" "}
            <Link href="https://clerkdev.com" target="_blank" className="text-secondary">
              ClerkJS
            </Link>{" "}
            WEB3 Authentication.
          </p>
          <p className="py-6">
            Powered by{" "}
            <Link href="https://lexingtontech.us" target="_blank" className="text-secondary">
              Lexington Tech
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
