"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Mar",
    Sales: 3890,
    Profit: 2980,
  },
];

export default function Performance() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Sales", "Profit"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
