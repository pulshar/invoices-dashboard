"use client";

import { Revenue } from "@/app/lib/definitions";
import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
  Subtitle,
} from "@tremor/react";

const valueFormatter = function (number: number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

type ChartProps = {
  revenue: Revenue[];
};
export function Chart({ revenue }: ChartProps) {
  return (
    <BarChart
      style={{ height: "385px" }}
      className="bg-white p-3 h-full"
      data={revenue}
      index="month"
      categories={["revenue"]}
      colors={["blue"]}
      valueFormatter={valueFormatter}
      yAxisWidth={58}
      // showAnimation={true}
    />
  );
}
