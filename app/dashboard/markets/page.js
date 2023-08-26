"use client";
import MarketsCandle from "./markets-candle";
import MarketsChart from "./markets-linechart";

const Markets = () => {
  return (
    <div className="my-4 px-8">
      <h1 className="text-5xl font-bold uppercase text-center py-4">
        Market Performance
      </h1>
      <MarketsCandle className="py-4" />
      <MarketsChart className="py-4" />
    </div>
  );
};

export default Markets;
