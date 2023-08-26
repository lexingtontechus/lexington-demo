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
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold uppercase py-4">
            Lexington Tech Demo
          </h1>
          <h2 className="text-3xl font-bold uppercase py-4">
            High performance scalable full-stack Web applications
          </h2>
          <h3 className="py-4 text-2xl font-semibold">
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="font-bold text-primary"
            >
              NextJS
            </Link>{" "}
            App Router
          </h3>
          <p className="py-4">
            Featuring{" "}
            <Link
              href="https://daisyui.com"
              target="_blank"
              className="font-bold text-primary"
            >
              DaisyUI
            </Link>{" "}
            Next Theme Integration.
          </p>
          <p className="py-4">
            Featuring{" "}
            <Link
              href="https://clerkdev.com"
              target="_blank"
              className="font-bold text-primary"
            >
              ClerkJS
            </Link>{" "}
            WEB3 Authentication.
          </p>
          <p className="py-4">
            Powered by{" "}
            <Link
              href="https://lexingtontech.us"
              target="_blank"
              className="font-bold text-primary uppercase"
            >
              Lexington Tech
            </Link>
          </p>
          <p className="py-4">Connect To Access The Demo</p>
        </div>
      </div>
    </div>
  );
}
