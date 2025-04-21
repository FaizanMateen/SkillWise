"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function ComparisonGraphSection({ percentile }) {
  const [chartData, setChartData] = useState({
    options: {
      chart: { type: "line" },
      xaxis: { categories: [0, 25, 50, 75, 100] },
      yaxis: { show: false },
      markers: { size: 5 },
    },
    series: [{ name: "Percentile", data: [] }],
  });

  useEffect(() => {
    const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 101));
    const fullData = [...randomNumbers, percentile].sort((a, b) => a - b);

    setChartData((prev) => ({
      ...prev,
      series: [{ name: "Percentile", data: fullData }],
    }));
  }, [percentile]);

  const comparison =
    percentile > 72 ? "higher than" : percentile === 72 ? "equal to" : "lower than";

  return (
    <section className="rounded-xl border-1 border-gray-200 bg-white p-6">
      <h3 className="mb-2 font-bold">Comparison Graph</h3>
      <p className="mb-4 text-sm text-gray-600">
        <b>You scored {percentile}% percentile</b> which is {comparison} the average percentile 72%
        of all the engineers who took this assessment
      </p>
      <Chart options={chartData.options} series={chartData.series} type="line" width="650" />
    </section>
  );
}

export default ComparisonGraphSection;
