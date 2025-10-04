import UploadCard from "./uploadCards";

interface EducationalCertificatesProps {
  files: { [label: string]: File | null };
  setFiles: React.Dispatch<React.SetStateAction<{ [label: string]: File | null }>>;
}

export default function EducationalCertificates({ files, setFiles }: EducationalCertificatesProps) {
  const labels = [
    "10th Certificate",
    "12th Certificate",
    "Degree Certificate",
    "Highest Qualification",
    "Marks Sheets",
    "Marks Sheets",
    "Marks Sheets",
    "Professional Certificate",
    "Professional Certificate",
    "Professional Certificate",
    "Add More",
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Educational Certificates
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        Please upload the following documents:
      </p>

      {/* First row: 0-3 */}
      <div className="flex justify-center gap-4 mt-5">
        {labels.slice(0, 4).map((label, index) => (
          <UploadCard
            key={index}
            label={label}
            file={files[label] ?? null}
            setFile={(file: File | null) =>
              setFiles((prev) => ({ ...prev, [label]: file }))
            }
          />
        ))}
      </div>

      {/* Second row: 4-6 */}
      <div className="flex justify-center gap-4 mt-5">
        {labels.slice(4, 7).map((label, index) => (
          <UploadCard
            key={index + 4}
            label={label}
            file={files[label] ?? null}
            setFile={(file: File | null) =>
              setFiles((prev) => ({ ...prev, [label]: file }))
            }
          />
        ))}
      </div>

      {/* Third row: 7-10 */}
      <div className="flex justify-center gap-4 mt-5">
        {labels.slice(7, 11).map((label, index) => (
          <UploadCard
            key={index + 7}
            label={label}
            file={files[label] ?? null}
            setFile={(file: File | null) =>
              setFiles((prev) => ({ ...prev, [label]: file }))
            }
          />
        ))}
      </div>
    </div>
  );
}
