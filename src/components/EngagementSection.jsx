import * as Icons from "lucide-react";
import SectionHeader from "./common/SectionHeader.jsx";
import Reveal from "./common/Reveal.jsx";
import Button from "./common/Button.jsx";
import { engagementModels } from "../data/siteContent.js";

export default function EngagementSection({ onDiscussEngagement }) {
  return (
    <section id="engagement" className="bg-[#FAF9FF] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeader
          eyebrow="HOW TO WORK WITH US"
          heading="Flexible Engagement for Different Delivery Needs"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagementModels.map((model, index) => {
            const Icon = Icons[model.icon] ?? Icons.Briefcase;
            return (
              <Reveal key={model.id} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-[22px] border border-[#E8E1F4] bg-white p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#C026D3]">
                    <Icon size={22} className="text-white" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#171126]">{model.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#5F5A6D]">{model.bestFor}</p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {model.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-[#171126]">
                        <Icons.Check size={16} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="secondary"
                    className="mt-7 w-fit"
                    onClick={() => onDiscussEngagement(model.title)}
                  >
                    Discuss This Model
                  </Button>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
