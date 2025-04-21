function ProgressBar({ title, percent, color }) {
  const barColors = {
    blue: "bg-blue-500",
    orange: "bg-orange-400",
    red: "bg-red-500",
    green: "bg-green-500",
  };
  const percentageColors = {
    blue: "text-blue-500",
    orange: "text-orange-400",
    red: "text-red-500",
    green: "text-green-500",
  };

  return (
    <div>
      <p className="mb-1 text-sm font-semibold text-gray-700">{title}</p>
      <div className="h-2 w-full rounded bg-gray-200">
        <div className={`${barColors[color]} h-2 rounded`} style={{ width: `${percent}%` }}></div>
      </div>
      <p className={`mt-1 text-right text-sm font-bold ${percentageColors[color]}`}>{percent}%</p>
    </div>
  );
}

export default ProgressBar;
