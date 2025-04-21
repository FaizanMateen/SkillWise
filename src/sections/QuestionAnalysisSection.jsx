"use client";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function QuestionAnalysisSection({ numCorrectAnswers }) {
  const percentCorrect = Math.round((numCorrectAnswers / 15) * 100);
  const series = [percentCorrect, 100 - percentCorrect];

  const options = {
    chart: { type: "donut", animations: { enabled: false } },
    labels: ["Correct", "Incorrect"],
    plotOptions: { pie: { donut: { size: "70%" } } },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return `${Math.round(val)}%`;
      },
    },
    legend: { position: "bottom" },
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val.toFixed(0)}%`;
        },
      },
    },
  };

  return (
    <section>
      <div className="rounded-xl border-1 border-gray-200 bg-white p-6">
        <h3 className="mb-2 font-semibold">Question Analysis</h3>
        <p className="mb-2 text-sm text-gray-500">
          <b>
            You scored {numCorrectAnswers} question{numCorrectAnswers !== 1 ? "s" : ""} correct out
            of 15.
          </b>{" "}
          That&apos;s {percentCorrect}% accuracy.
        </p>

        <div className="flex items-center justify-center">
          <Chart options={options} series={series} type="donut" width={300} />
        </div>
      </div>
    </section>
  );
}

export default QuestionAnalysisSection;
