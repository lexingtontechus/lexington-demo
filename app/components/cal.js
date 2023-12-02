/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
"use client";
import { BsFillCalendarDateFill } from "react-icons/bs";
//import { FaCalendarDays } from "react-icons/fa6";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";

const calImage = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

export default function Cal() {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const d = new Date();
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
    <div
      className="btn glass fixed z-40 bottom-10 right-5 h-20 w-20"
      data-cal-link="lexington/free-consulting"
      data-cal-config='{"layout":"month_view"}'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Calendar"
        role="img"
        viewBox="0 0 512 512"
      >
        <path
          d="M512 455c0 32-25 57-57 57H57c-32 0-57-25-57-57V128c0-31 25-57 57-57h398c32 0 57 26 57 57z"
          fill="#e0e7ec"
        />
        <path
          d="M484 0h-47c2 4 4 9 4 14a28 28 0 1 1-53-14H124c3 4 4 9 4 14A28 28 0 1 1 75 0H28C13 0 0 13 0 28v157h512V28c0-15-13-28-28-28z"
          fill="#dd2f45"
        />

        <g fill="#f3aab9">
          <circle cx="470" cy="142" r="14" />
          <circle cx="470" cy="100" r="14" />
          <circle cx="427" cy="142" r="14" />
          <circle cx="427" cy="100" r="14" />
          <circle cx="384" cy="142" r="14" />
          <circle cx="384" cy="100" r="14" />
        </g>

        <text
          id="month"
          x="32"
          y="164"
          fill="#fff"
          font-family="monospace"
          font-size="140px"
          className="text-left"
        >
          {monthNames[d.getMonth()]}
        </text>

        <text
          id="day"
          x="125" //256
          y="400"
          fill="#66757f"
          font-family="monospace"
          font-size="256px"
          className="mx-auto"
        >
          {new Date().getDate()}
        </text>

        <text
          id="weekday"
          x="125" //256
          y="480"
          fill="#66757f"
          font-family="monospace"
          font-size="64px"
          className="text-center"
        >
          {dayNames[d.getDay()]}
        </text>
      </svg>
    </div>
  );
}
