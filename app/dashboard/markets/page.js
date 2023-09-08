"use client";
import MarketsCandle from "./markets-candle";
import MarketsChart from "./markets-linechart";

const Markets = () => {
  return (
    <div className="my-4 px-8">
      <h1 className="text-5xl font-bold uppercase text-center py-4">
        Market Performance
      </h1>
      <h2 className="text-xl text-center py-4">
        This is a showcase of a financial data integration with market performance API datasets.
      </h2>
      <MarketsCandle className="py-4" />
      <MarketsChart className="py-4" />
    </div>
  );
};

export default Markets;
