import Table from "./table";

export default function RequestedAssets() {
  const columns = [
    "Request ID",
    "Asset Type",
    "Asset Requested",
    "Requested On",
    "Priority",
    "Status",
    "Approved by",
    "Expected Allocation",
    "Remarks",
  ];

  const data = [
    {
      "Request ID": "REQ001",
      "Asset Type": "Laptop",
      "Asset Requested": "Dell XPS 13",
      "Requested On": "2025-09-30",
      Priority: "High",
      Status: "Pending",
      "Approved by": "Manager A",
      "Expected Allocation": "2025-10-05",
      Remarks: "Urgent requirement",
    },
    {
      "Request ID": "REQ002",
      "Asset Type": "Chair",
      "Asset Requested": "Ergonomic Chair",
      "Requested On": "2025-09-28",
      Priority: "Medium",
      Status: "Approved",
      "Approved by": "Manager B",
      "Expected Allocation": "2025-10-02",
      Remarks: "-",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Asset Requests
      </h2>
      <div className="mt-5 overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
