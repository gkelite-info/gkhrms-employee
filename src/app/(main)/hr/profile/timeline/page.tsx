import ShiftAndLocation from "./shiftAndLocation";
import TimelineChart from "./timelineChart";




export default function Timeline() {
    return (
        <>
            <div className="bg-indigo-00 w-[64%] rounded-lg gap-2 flex flex-col">
                <ShiftAndLocation />
                <TimelineChart />
            </div>
        </>
    )
}