import ProgressBar from "@/components/ProgressBar";

function SyllabusWiseAnalysisSection() {
  return (
    <section>
      <div className="rounded-xl border-1 border-gray-200 bg-white p-6">
        <h3 className="mb-4 font-semibold">Syllabus Wise Analysis</h3>
        <div className="space-y-3">
          <ProgressBar title="HTML Tools, Forms, History" percent={80} color="blue" />
          <ProgressBar title="Tags & References in HTML" percent={60} color="orange" />
          <ProgressBar title="Tables & References in HTML" percent={24} color="red" />
          <ProgressBar title="Tables & CSS Basics" percent={96} color="green" />
        </div>
      </div>
    </section>
  );
}

export default SyllabusWiseAnalysisSection;
