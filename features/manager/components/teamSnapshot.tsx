"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function TeamSnapshot() {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        mode: "free",
        slides: {
            perView: 3.5,
            spacing: 16,
        },
    });

    const teamRoles = [
        "Team Leads",
        "Project Leads",
        "Delivery Managers",
        "Department Heads"
    ]

    return (
        <div className="flex flex-col p-3">
            <h2 className="text-[#111827] font-semibold text-sm mb-2">
                Team Snapshot
            </h2>

            <div ref={sliderRef} className="keen-slider">
                {teamRoles.map((role, i) => (
                    <div
                        key={role}
                        className="
              keen-slider__slide
              bg-[#E7E7E7]
              h-10
              rounded-lg
              flex items-center justify-center
              shrink-0
              cursor-pointer
            "
                    >
                        <h3 className="text-[#111827] text-sm font-medium cursor-pointer">
                            {role}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}