import UploadCard from "./uploadCards";

export default function BackgroundVerification() {
  const labels = ["Police Clearance Certificate"];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Background Verification Documents
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Please upload the following document:
      </p>

      <div className="flex flex-wrap mt-5 justify-start gap-4">
        {labels.map((label) => (
          <UploadCard key={label} label={label} />
        ))}
      </div>
    </div>
  );
}
