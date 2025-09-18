"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function KeenSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    vertical: true,            // 👈 vertical scroll
    mode: "free",              // free scrolling
    slides: {
      perView: 2.5,            // how many cards are visible at once
      spacing: 16,             // gap between slides (px)
    },
  });

  const cards = [
    { name: "Jasmine", title: "Leave Request", reason: "Family Event" },
    { name: "John",    title: "Attendance Regulariz…..", reason: "Forget to Check-in" },
    { name: "Emily",   title: "Leave Request", reason: "Client Meeting" },
    { name: "Jasmine", title: "Leave Request", reason: "Family Event" },
  ];

  return (
    <div className="h-[94%] w-full mt-2">
      <div ref={sliderRef} className="keen-slider h-full overflow-hidden">
        {cards.map((c, i) => (
          <div key={i} className="keen-slider__slide">
            {/* --- your card layout --- */}
            <div className="bg-[#F9FAFB] h-[200px] rounded-lg border border-[#C3C3C3] flex p-2">
              <div className="w-[55%] flex gap-4">
                <div className="w-[25%] flex items-center justify-center">
                  <div className="h-16 w-16 bg-gray-400 flex items-center justify-center rounded-full">
                    {c.name[0]}
                  </div>
                </div>
                <div className="w-[75%] flex flex-col justify-center">
                  <h3 className="font-semibold text-lg text-[#111827]">{c.name}</h3>
                  <h5 className="text-md text-[#575757] font-medium">{c.title}</h5>
                  <p className="text-xs text-[#575757] mt-1">{c.reason}</p>
                </div>
              </div>
              <div className="w-[45%] flex items-center justify-center gap-2">
                <button className="bg-[#3DB482] px-3 py-2 rounded-lg text-white font-semibold">Approve</button>
                <button className="bg-[#F66557] px-3 py-2 rounded-lg text-white font-semibold">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
