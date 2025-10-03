import Table from "./table";

export default function AssignedAssets() {
    const columns = [
        "Asset Type",
        "Asset",
        "Asset Category",
        "Assigned on",
        "Acknowledgement Status",
        "Latest Condition",
    ];

    const data = [
        {
            "Asset Type": "Laptop",
            "Asset": "Dell XPS 13",
            "Asset Category": "Electronics",
            "Assigned on": "2025-09-30",
            "Acknowledgement Status": "Acknowledged",
            "Latest Condition": "Good",
        },
        {
            "Asset Type": "Charger",
            "Asset": "Laptop charger",
            "Asset Category": "Electronics",
            "Assigned on": "2025-09-28",
            "Acknowledgement Status": "Acknowledged",
            "Latest Condition": "Good",
        },
    ];

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
