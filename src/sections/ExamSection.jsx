"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function UpdateScoreModal({
  onModalSubmit,
  onModalClose,
  rank,
  percentile,
  numCorrectAnswers,
  handleRank,
  handlePercentile,
  handleNumCorrectAnswers,
}) {
  return createPortal(
    <div className="absolute top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-gray-500/50 backdrop-blur">
      <form className="w-3xl rounded-xl bg-gray-50 px-8 py-8" onSubmit={onModalSubmit}>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="mb-6 text-xl font-bold">Update Score</h2>
          <Image src="/html-icon.svg" width={35} height={35} alt="HTML Logo" />
        </div>

        {/* RANK */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <label className="flex basis-1/2 items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-800 text-white">
                1
              </span>
              <span>
                Update your <strong>Rank:</strong>
              </span>
            </label>

            <div className="basis-1/2">
              <input
                className="w-full rounded-lg border-1 border-gray-300 p-2 outline-0 focus:border-2 focus:border-gray-500"
                type="number"
                step={1}
                value={rank}
                onChange={(e) => handleRank(e.target.value)}
              />
              {(rank === 0 || rank === "") && (
                <p className="text-xs text-red-500">Rank should be a number</p>
              )}
            </div>
          </div>

          {/* PERCENTILE */}
          <div className="flex items-center justify-between gap-4">
            <label className="flex basis-1/2 items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-800 text-white">
                2
              </span>
              <span>
                Update your <strong>Percentile:</strong>
              </span>
            </label>

            <div className="basis-1/2">
              <input
                className="w-full rounded-lg border-1 border-gray-300 p-2 outline-0 focus:border-2 focus:border-gray-500"
                type="number"
                step={0.5}
                value={percentile}
                onChange={(e) => handlePercentile(e.target.value)}
              />
              {(percentile < 0 || percentile > 100) && (
                <p className="text-xs text-red-500">Required percentile 0-100</p>
              )}
            </div>
          </div>

          {/* TOTAL ANSWERS */}
          <div className="flex items-center justify-between gap-4">
            <label className="flex basis-1/2 items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-800 text-white">
                3
              </span>
              <span>
                Update your <strong>Current Score (out of 15):</strong>
              </span>
            </label>

            <div className="basis-1/2">
              <input
                className="w-full rounded-lg border-1 border-gray-300 p-2 outline-0 focus:border-2 focus:border-gray-500"
                type="number"
                step={1}
                value={numCorrectAnswers}
                onChange={(e) => handleNumCorrectAnswers(e.target.value)}
              />
              {(numCorrectAnswers < 0 || numCorrectAnswers > 15) && (
                <p className="text-xs text-red-500">Total questions are 15</p>
              )}
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 flex items-center justify-end gap-2 font-medium">
          <button
            className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2"
            onClick={onModalClose}
            type="reset"
          >
            Cancel
          </button>
          <button
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>,
    document.body,
  );
}

function ExamSection({
  rank,
  percentile,
  numCorrectAnswers,
  handleRank,
  handlePercentile,
  handleNumCorrectAnswers,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    handleRank(8);
    handlePercentile(90);
    handleNumCorrectAnswers(12);
  };

  const hanldeModalSubmit = () => {
    if (
      rank === 0 ||
      rank === "" ||
      percentile < 0 ||
      percentile > 100 ||
      numCorrectAnswers < 0 ||
      numCorrectAnswers > 15
    )
      return null;

    if (typeof window !== "undefined") {
      window.localStorage.setItem("rank", JSON.stringify(rank));
      window.localStorage.setItem("percentile", JSON.stringify(percentile));
      window.localStorage.setItem("numCorrectAnswers", JSON.stringify(numCorrectAnswers));
    }

    setIsModalOpen(false);
  };

  return (
    <section className="rounded-xl border-1 border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <Image src="/html-icon.svg" width={48} height={48} className="mr-4" alt="HTML Logo" />
        <div className="mr-9">
          <h2 className="text-xl font-semibold">Hyper Text Markup Language</h2>
          <p className="text-sm font-semibold text-gray-500">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
        <button
          className="mt-2 mb-9 ml-16 rounded-xl bg-blue-900 px-6 py-2 font-semibold text-white"
          onClick={() => setIsModalOpen((prev) => !prev)}
        >
          Update
        </button>
      </div>

      {isModalOpen && (
        <UpdateScoreModal
          onModalSubmit={hanldeModalSubmit}
          onModalClose={handleModalClose}
          rank={rank}
          percentile={percentile}
          numCorrectAnswers={numCorrectAnswers}
          handleRank={handleRank}
          handlePercentile={handlePercentile}
          handleNumCorrectAnswers={handleNumCorrectAnswers}
        />
      )}
    </section>
  );
}

export default ExamSection;
