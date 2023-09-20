/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";

import { FaCalendarDays } from "react-icons/fa6";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Cal() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: { branding: { brandColor: "#7e22ce" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="btn btn-secondary btn-sm mask mask-hexagon fixed z-40 bottom-10 right-5"
      data-cal-link="lexington/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      <FaCalendarDays />
    </button>
  );
}
