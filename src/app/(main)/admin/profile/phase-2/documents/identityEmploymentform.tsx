import UploadCard from "./uploadCards";

export default function IdentityEmploymentForm() {
  const labels = ["Resume / CV", "Passport - Sized photographs", "Bank Account Details"];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Identity & Employment Forms
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Please upload the following documents:
      </p>

      <div className="flex flex-wrap mt-5 justify-center gap-4">
        {labels.map((label) => (
          <UploadCard key={label} label={label} />
        ))}
      </div>
    </div>
  );
}
