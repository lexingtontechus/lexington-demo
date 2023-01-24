"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "cyberpunk" ? (
        <button
          className="btn btn-secondary mask mask-hexagon"
          onClick={() => setTheme("dracula")}
        >
          <span className="sr-only">Dark Mode</span>
          <Beer />
        </button>
      ) : (
        <button
          className="btn btn-secondary mask mask-hexagon"
          onClick={() => setTheme("cyberpunk")}
        >
          <span className="sr-only">Light Mode</span>
          <Beer />
        </button>
      )}
    </div>
  );
};

function Beer() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 123.58800478239715"
      width="30"
      height="30"
      className="fill-neutral dark:fill-neutral hover:fill-accent"
    >
      <g transform="translate(0, 0) scale(1.2358800478239715)">
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M48.549,100H19.295c-7.55,0-13.693-6.144-13.693-13.693v-46.39c0-0.688,0.557-1.244,1.245-1.244s1.245,0.557,1.245,1.244  v46.39c0,6.178,5.025,11.204,11.204,11.204h29.254c6.178,0,11.203-5.026,11.203-11.204V37.136c0-1.356-0.24-2.687-0.715-3.948  c-0.243-0.642,0.083-1.362,0.727-1.602c0.64-0.25,1.362,0.08,1.603,0.727c0.581,1.542,0.875,3.166,0.875,4.824v49.171  C62.241,93.856,56.098,100,48.549,100z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M67.52,78.838h-6.522c-0.688,0-1.245-0.557-1.245-1.245c0-0.688,0.557-1.244,1.245-1.244h6.522  c2.862,0,5.281-3.99,5.281-8.714V54.563c0-4.724-2.419-8.714-5.281-8.714h-6.522c-0.688,0-1.245-0.557-1.245-1.245  c0-0.688,0.557-1.244,1.245-1.244h6.522c4.357,0,7.771,4.921,7.771,11.203v13.071C75.29,73.917,71.877,78.838,67.52,78.838z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M70.336,84.233h-9.339c-0.688,0-1.245-0.558-1.245-1.245c0-0.688,0.557-1.245,1.245-1.245h9.339  c4.461,0,8.089-4.838,8.089-10.788V51.454c0-5.949-3.628-10.79-8.089-10.79h-9.339c-0.688,0-1.245-0.557-1.245-1.245  s0.557-1.245,1.245-1.245h9.339c5.832,0,10.578,5.957,10.578,13.28v19.501C80.914,78.276,76.168,84.233,70.336,84.233z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M6.284,38.954c-0.259,0-0.519-0.08-0.743-0.245C2.019,36.083,0,32.088,0,27.746c0-5.234,2.957-9.944,7.716-12.292  c0.614-0.307,1.361-0.049,1.667,0.564c0.305,0.618,0.051,1.364-0.565,1.668C4.915,19.611,2.49,23.467,2.49,27.746  c0,3.547,1.654,6.815,4.539,8.964c0.551,0.411,0.665,1.191,0.254,1.744C7.039,38.782,6.664,38.954,6.284,38.954z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M8.255,17.817c-0.542,0-1.042-0.357-1.196-0.907c-0.242-0.851-0.363-1.729-0.363-2.609c0-5.314,4.394-9.638,9.793-9.638  c1.901,0,3.745,0.538,5.334,1.553c0.579,0.371,0.748,1.14,0.378,1.72c-0.372,0.576-1.141,0.744-1.72,0.378  c-1.187-0.76-2.567-1.161-3.992-1.161c-4.028,0-7.304,3.207-7.304,7.148c0,0.652,0.09,1.301,0.269,1.933  c0.187,0.661-0.197,1.35-0.858,1.537C8.483,17.802,8.369,17.817,8.255,17.817z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M41.422,10.1c-0.532,0-1.025-0.343-1.188-0.877C39.011,5.258,35.2,2.49,30.965,2.49c-0.002,0-0.005,0-0.005,0  c-3.732,0-7.064,2.04-8.701,5.326c-0.308,0.615-1.05,0.868-1.67,0.559c-0.615-0.308-0.865-1.055-0.559-1.67  C22.092,2.569,26.279,0,30.958,0c0.002,0,0.005,0,0.007,0c5.317,0,10.107,3.49,11.646,8.488c0.204,0.658-0.165,1.354-0.822,1.557  C41.668,10.083,41.544,10.1,41.422,10.1z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M54.17,35.988c-0.681,0-1.359-0.061-2.016-0.178c-0.676-0.121-1.126-0.768-1.004-1.446c0.124-0.676,0.763-1.114,1.446-1.004  c0.508,0.093,1.036,0.139,1.573,0.139c4.794,0,8.694-3.817,8.694-8.507c0-4.693-3.9-8.51-8.694-8.51  c-0.438,0.002-0.873,0.034-1.296,0.095c-0.674,0.073-1.313-0.377-1.408-1.058c-0.097-0.681,0.377-1.311,1.058-1.408  c0.535-0.075,1.082-0.117,1.642-0.119c6.171,0,11.188,4.933,11.188,11C65.354,31.055,60.336,35.988,54.17,35.988z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M52.269,16.302c-0.576,0-1.095-0.403-1.216-0.992c-0.679-3.251-3.638-5.611-7.034-5.611c-0.761,0-1.507,0.114-2.22,0.34  c-0.663,0.212-1.356-0.155-1.563-0.81c-0.209-0.655,0.156-1.355,0.81-1.563C42.001,7.363,43,7.209,44.019,7.209  c4.571,0,8.554,3.193,9.471,7.595c0.141,0.671-0.292,1.333-0.966,1.471C52.438,16.294,52.354,16.302,52.269,16.302z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M13.992,45.85c-4.678,0-8.522-3.452-8.942-8.03c-0.062-0.686,0.441-1.291,1.125-1.354c0.684-0.054,1.291,0.442,1.354,1.126  c0.296,3.235,3.135,5.77,6.462,5.77c2.851,0,5.338-1.787,6.191-4.444c0.21-0.654,0.911-1.01,1.566-0.808  c0.654,0.212,1.015,0.912,0.805,1.565C21.37,43.367,17.929,45.85,13.992,45.85z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M25.439,41.503c-1.628,0-3.187-0.37-4.632-1.097c-0.614-0.309-0.862-1.056-0.553-1.671c0.308-0.612,1.059-0.87,1.672-0.552  c3.397,1.704,7.838,0.574,9.946-2.562c0.387-0.571,1.162-0.717,1.729-0.338c0.571,0.384,0.722,1.157,0.338,1.729  C32.045,39.825,28.867,41.503,25.439,41.503z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M42.184,41.503c-3.891,0-7.503-1.532-10.178-4.316c-0.477-0.495-0.462-1.283,0.034-1.76c0.498-0.477,1.286-0.457,1.76,0.034  c2.2,2.29,5.178,3.552,8.383,3.552c3.873,0,7.464-1.894,9.604-5.064c0.382-0.571,1.164-0.719,1.727-0.335  c0.571,0.384,0.722,1.157,0.335,1.726C51.247,39.197,46.886,41.503,42.184,41.503z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M33.922,87.447c-0.992,0-1.933-0.504-2.58-1.381c-0.627-0.852-0.96-2.016-0.96-3.365V39.419  c0-0.688,0.557-1.245,1.245-1.245s1.245,0.557,1.245,1.245v43.282c0,3.112,2.101,3.112,2.101,0V39.419  c0-0.688,0.556-1.245,1.245-1.245s1.245,0.557,1.245,1.245v43.282C37.462,85.818,35.682,87.447,33.922,87.447z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M49.976,87.447c-0.992,0-1.933-0.504-2.579-1.381c-0.628-0.852-0.961-2.016-0.961-3.365V39.419  c0-0.688,0.557-1.245,1.245-1.245c0.688,0,1.245,0.557,1.245,1.245v43.282c0,3.112,2.101,3.112,2.101,0V36.316  c0-0.688,0.557-1.245,1.244-1.245c0.688,0,1.245,0.558,1.245,1.245v46.385C53.516,85.818,51.736,87.447,49.976,87.447z"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M16.842,87.447c-0.992,0-1.933-0.504-2.58-1.381c-0.628-0.852-0.96-2.016-0.96-3.365V45.74c0-0.688,0.557-1.245,1.245-1.245  s1.245,0.558,1.245,1.245v36.961c0,3.112,2.101,3.112,2.101,0V42.667c0-0.688,0.557-1.245,1.245-1.245s1.245,0.558,1.245,1.245  v40.034C20.382,85.818,18.601,87.447,16.842,87.447z"
        />
      </g>
    </svg>
  );
}
export default ThemeChanger;
