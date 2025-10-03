import Table from "./table";

export default function AssetDamageCharges() {
  const columns = [
    "Asset Type",
    "Asset Name/code",
    "Damage Description",
    "Reported on",
    "Estimated Charges",
    "Status",
    "Payment Mode",
    "Remarks",
  ];

  const data = [
    {
      "Asset Type": "Laptop",
      "Asset Name/code": "Dell XPS 13 - A1001",
      "Damage Description": "Screen Crack",
      "Reported on": "2025-09-28",
      "Estimated Charges": "25500/-",
      Status: "Pending",
      "Payment Mode": "Cash",
      Remarks: "Needs urgent repair",
    },
    {
      "Asset Type": "Chair",
      "Asset Name/code": "Ergo Chair - C2001",
      "Damage Description": "Broken Wheel",
      "Reported on": "2025-09-27",
      "Estimated Charges": "1550/-",
      Status: "Approved",
      "Payment Mode": "Company Account",
      Remarks: "-",
    },
    {
      "Asset Type": "Monitor",
      "Asset Name/code": "Samsung 24\" - M3002",
      "Damage Description": "Dead Pixels",
      "Reported on": "2025-09-25",
      "Estimated Charges": "3000/-",
      Status: "Paid",
      "Payment Mode": "Online Transfer",
      Remarks: "Replaced",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-5">
      <h2 className="text-lg font-semibold text-[#323232]">
        Asset Damage Charges
      </h2>
      <div className="mt-5 overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
