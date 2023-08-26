"use client";
import KPIS from "./kpis";
import Performance from "./performance";
import WebAnalyics from "./webanalytics";
import Sales from "./sales";
import RegionalSales from "./regionalsales";

const Stats = () => {
  return (
    <div className="my-4 px-8 mx-auto">
      <h1 className="text-5xl font-bold uppercase text-center py-4">
        Statistical Analysis
      </h1>
      <div className="p-8 mx-auto max-w-2xl">
        <KPIS />
        <div className="divider"></div>
        <Performance />
        <div className="divider"></div>
        <WebAnalyics />
        <div className="divider"></div>
        <Sales />
        <div className="divider"></div>
        <RegionalSales />
      </div>
    </div>
  );
};

export default Stats;
