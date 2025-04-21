"use client";

import ComparisonGraphSection from "@/sections/ComparisonGraphSection";
import ExamSection from "@/sections/ExamSection";
import QuestionAnalysisSection from "@/sections/QuestionAnalysisSection";
import QuickStatisticsSection from "@/sections/QuickStatisticsSection";
import SyllabusWiseAnalysisSection from "@/sections/SyllabusWiseAnalysisSection";
import { useEffect, useState } from "react";

function Page() {
  const [rank, setRank] = useState(8);
  const [percentile, setPercentile] = useState(90);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(12);

  useEffect(() => {
    const storedRank = localStorage.getItem("rank");
    const storedPercentile = localStorage.getItem("percentile");
    const storedNumCorrectAnswers = localStorage.getItem("numCorrectAnswers");

    if (storedRank) setRank(Number(JSON.parse(storedRank)));
    if (storedPercentile) setPercentile(Number(JSON.parse(storedPercentile)));
    if (storedNumCorrectAnswers) setNumCorrectAnswers(Number(JSON.parse(storedNumCorrectAnswers)));
  }, []);

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-col gap-4">
        <ExamSection
          rank={rank}
          percentile={percentile}
          numCorrectAnswers={numCorrectAnswers}
          handleRank={setRank}
          handlePercentile={setPercentile}
          handleNumCorrectAnswers={setNumCorrectAnswers}
        />
        <QuickStatisticsSection
          rank={rank}
          percentile={percentile}
          numCorrectAnswers={numCorrectAnswers}
        />
        <ComparisonGraphSection percentile={percentile} />
      </div>

      <div className="flex flex-col gap-4">
        <SyllabusWiseAnalysisSection />
        <QuestionAnalysisSection numCorrectAnswers={numCorrectAnswers} />
      </div>
    </div>
  );
}

export default Page;
