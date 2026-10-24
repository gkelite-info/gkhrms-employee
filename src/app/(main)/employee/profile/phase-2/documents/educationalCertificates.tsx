import UploadCard from "./uploadCards";

export default function EducationalCertificates() {
  const row1 = [
    "10th Certificate",
    "12th Certificate",
    "Degree Certificate",
    "Highest Qualification",
  ];

  const row2 = ["Marks Sheets", "Marks Sheets", "Marks Sheets"];

  const row3 = [
    "Professional Certificate",
    "Professional Certificate",
    "Professional Certificate",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Educational Certificates
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Please upload the following documents:
      </p>

      {/* Row 1 */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {row1.map((label, index) => (
          <UploadCard key={`r1-${index}`} label={label} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {row2.map((label, index) => (
          <UploadCard key={`r2-${index}`} label={label} />
        ))}
      </div>

      {/* Row 3 */}
      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {row3.map((label, index) => (
          <UploadCard key={`r3-${index}`} label={label} />
        ))}
      </div>
    </div>
  );
}
