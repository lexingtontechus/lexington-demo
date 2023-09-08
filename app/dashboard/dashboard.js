"use client";
import KPIS from "./components/kpis";
import Performance from "./components/performance";
import WebAnalyics from "./components/webanalytics";
import Sales from "./components/sales";
import RegionalSales from "./components/regionalsales";

const Dashboard = () => {
  return (
    <div className="my-4 px-8 mx-auto">
      <h1 className="text-5xl font-bold uppercase text-center py-4">
        Dashboard
      </h1>
      <h2 className="text-xl text-center py-4">
        This is a showcase of a dashboard summary of business metrics.
      </h2>
      <div className="mx-auto">
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

export default Dashboard;
