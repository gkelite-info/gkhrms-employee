"use client";

import { useEffect, useState } from "react";
import Table from "./table";
import { getAssignedAssets } from "@/api-requests/employeeApi";

export default function AssignedAssets({ employeeId }: { employeeId: number }) {
    const columns = [
        "Asset Type",
        "Asset",
        "Asset Category",
        "Assigned on",
        "Acknowledgement Status",
        "Latest Condition",
    ];

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const assets = await getAssignedAssets(employeeId);

                const mappedData = assets.map((row: any) => ({
                    "Asset Type": row.assetType,
                    "Asset": row.asset,
                    "Asset Category": row.assetCategory,
                    "Assigned on": row.assignedOn,
                    "Acknowledgement Status": row.acknowledgementStatus,
                    "Latest Condition": row.latestCondition
                }));

                setData(mappedData);
            } catch (err: any) {
                console.error(err);
                setError("Failed to load assigned assets");
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
                Assigned Assets
            </h2>
            <div className="mt-5">
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}
