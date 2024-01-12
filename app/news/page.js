import Link from "next/link";
import { Suspense } from "react";
import NewsPage from "./news";

export default function News() {
  return (
    <div className="mx-auto px-8">
      <h1 className="text-5xl uppercase font-bold p-4 text-center">News</h1>
      <h2 className="text-2xl uppercase font-semibold p-4 text-center">
        Tech Crunch API Integration
      </h2>
      <h3 className="text-xl text-center py-4 text-pretty">
        This is a realtime showcase of an API integration using NextJS dynamic
        client side rendering.
      </h3>
      <div className="m-4 px-8 mx-auto justify-between flex flex-grow flex-wrap gap-4">
        <Suspense
          fallback={
            <h1 className="text-2xl uppercase font-semibold mx-auto">
              Loading News
              <span className="ml-4 loading loading-ring loading-sm"></span>
              <span className="ml-1 loading loading-ring loading-sm"></span>
              <span className="ml-1 loading loading-ring loading-sm"></span>
            </h1>
          }
        >
          <NewsPage />
        </Suspense>
      </div>
    </div>
  );
}
