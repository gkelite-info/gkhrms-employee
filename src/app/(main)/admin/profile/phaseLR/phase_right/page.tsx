import Address from "./address";
import Education from "./education";
import IdentityInformation from "./identity";
import ParentialInsuranceDetails from "./insurance";
import Relations from "./relations";



export default function PhaseRight() {
    return (
        <>
            <div className="w-[54%] lg:mt-3 bg-red-00">
                <Education />
                <Address />
                <ParentialInsuranceDetails />
                <Relations />
                <IdentityInformation />
            </div>
        </>
    )
}