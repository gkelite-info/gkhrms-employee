"use client";

import { useEffect, useState } from "react";
import Table from "./table";
import { getRequestedAssets } from "@/api-requests/employeeApi";

export default function RequestedAssets({ employeeId }: { employeeId: number }) {
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

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const assets = await getRequestedAssets(employeeId);

        const mappedData = assets.map((row: any) => ({
          "Request ID": row.requestId,
          "Asset Type": row.assetType,
          "Asset Requested": row.assetRequested,
          "Requested On": row.requestedOn,
          Priority: row.priority,
          Status: row.status,
          "Approved by": row.approvedBy ?? "-",
          "Expected Allocation": row.expectedAllocation ?? "-",
          Remarks: row.remarks ?? "-",
        }));

        setData(mappedData);
      } catch (err: any) {
        console.error(err);
        setError("Failed to load requested assets");
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
        Asset Requests
      </h2>
      <div className="mt-5 overflow-x-auto">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
