import Image from "next/image";
function QuickStatisticsSection({ rank, percentile, numCorrectAnswers }) {
  return (
    <section className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">Quick Statistics</h2>
      <div className="grid grid-cols-3 divide-x divide-gray-300 text-center">
        <div className="flex items-center justify-center gap-3 px-4">
          <Image
            src="/trophy.jpg"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover"
            alt="Person Image"
          />
          <div className="text-left">
            <p className="text-lg font-bold">{rank}</p>
            <p className="text-sm text-gray-500">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 px-4">
          <Image
            src="/note.svg"
            width={48}
            height={48}
            className="h-11 w-11 rounded-full object-cover"
            alt="Person Image"
          />
          <div className="text-left">
            <p className="text-lg font-bold">{percentile}%</p>
            <p className="text-sm text-gray-500">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 px-4">
          <Image
            src="/tick-green-icon.svg"
            width={28}
            height={28}
            className="h-8 w-8 rounded-full"
            alt="Person Image"
          />
          <div className="text-left">
            <p className="text-lg font-bold">{numCorrectAnswers} / 15</p>
            <p className="text-sm text-gray-500">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickStatisticsSection;
