import AboutMe from "./aboutme";
import FamilyDetails from "./familyDetails";
import PrimaryDetails from "./primaryDetails";
import WhatILove from "./whatIlove";


export default function PhaseLeft() {
    return (
        <>
            <div className="w-[45%] lg:mt-3">
                <AboutMe />
                <WhatILove />
                <PrimaryDetails />
                <FamilyDetails />
            </div>
        </>
    )
}