import * as Icons from "lucide-react";
import SectionHeader from "./common/SectionHeader.jsx";
import Reveal from "./common/Reveal.jsx";
import { processStages } from "../data/siteContent.js";

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#F5F1FF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="OUR PROCESS"
          heading="From Business Problem to Production System"
        />

        {/* Desktop: horizontal connected timeline */}
        <div className="relative mt-16 hidden lg:grid lg:grid-cols-4 lg:gap-8">
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-8 -z-0 h-10 w-full"
          >
            <path
              d="M60 20 Q 350 -10 600 20 T 1140 20"
              fill="none"
              stroke="#C7B8F5"
              strokeWidth="2"
              strokeDasharray="2 10"
              strokeLinecap="round"
            />
          </svg>
          {processStages.map((stage, index) => {
            const Icon = Icons[stage.icon] ?? Icons.Circle;
            return (
              <Reveal key={stage.number} delay={index * 0.1} className="relative z-10">
                <div className="flex flex-col items-start rounded-[20px] border border-[#E8E1F4] bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#6D28D9] to-[#C026D3] text-sm font-extrabold text-white">
                      {stage.number}
                    </span>
                    <Icon size={20} className="text-[#7C3AED]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#171126]">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5A6D]">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile/tablet: vertical connected timeline */}
        <div className="mt-14 flex flex-col lg:hidden">
          {processStages.map((stage, index) => {
            const Icon = Icons[stage.icon] ?? Icons.Circle;
            const isLast = index === processStages.length - 1;
            return (
              <Reveal key={stage.number} delay={index * 0.08} className="relative flex gap-5 pb-10 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6D28D9] to-[#C026D3] text-sm font-extrabold text-white">
                    {stage.number}
                  </span>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 border-l-2 border-dashed border-[#C7B8F5]"
                    />
                  )}
                </div>
                <div className="rounded-[20px] border border-[#E8E1F4] bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="text-[#7C3AED]" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[#171126]">{stage.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F5A6D]">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
