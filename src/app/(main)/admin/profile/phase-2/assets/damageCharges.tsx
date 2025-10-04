"use client";

import { useEffect, useState } from "react";
import Table from "./table";
import { getAssetDamages } from "@/api-requests/employeeApi";

export default function AssetDamageCharges({ employeeId }: { employeeId: number }) {
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

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const damages = await getAssetDamages(employeeId);

        const mappedData = damages.map((row: any) => ({
          "Asset Type": row.assetType,
          "Asset Name/code": row.assetNameOrCode,
          "Damage Description": row.damageDescription,
          "Reported on": row.reportedOn,
          "Estimated Charges": row.estimatedCharges,
          Status: row.status,
          "Payment Mode": row.paymentMode ?? "-",
          Remarks: row.remarks ?? "-",
        }));

        setData(mappedData);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load asset damages");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [employeeId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
