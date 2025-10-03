import PhaseLeft from "./phase_left/page";
import PhaseRight from "./phase_right/page";



export default function PhaseLR() {
    return (
        <>
            <div className="flex w-[100%] justify-between">
                <PhaseLeft />
                <PhaseRight />
            </div>
        </>
    )
}