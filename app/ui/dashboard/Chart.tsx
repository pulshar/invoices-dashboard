"use client";

import {
  AreaChart,
  BarChart,
  Card,
  Flex,
  Switch,
  Title,
  Subtitle,
} from "@tremor/react";

const valueFormatter = function (number) {
  return "$ " + new Intl.NumberFormat("us").format(number).toString();
};

export function Chart({ revenue }) {
  // console.log(revenue);
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
