import * as Icons from "lucide-react";
import Reveal from "./common/Reveal.jsx";
import Button from "./common/Button.jsx";
import { whyLaksh } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function WhyLakshSection() {
  return (
    <section id="why-laksh" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-bold tracking-[0.18em] text-[#7C3AED]">
            WHY LAKSH AI
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] text-[#171126]">
            Focused Engineering Without Unnecessary Complexity
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {whyLaksh.benefits.map((benefit) => {
              const Icon = Icons[benefit.icon] ?? Icons.Sparkles;
              return (
                <div key={benefit.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5F1FF] text-[#7C3AED]">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-[#171126]">{benefit.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5F5A6D]">{benefit.text}</p>
                </div>
              );
            })}
          </div>

          <ul className="mt-8 flex flex-col gap-2.5 border-t border-[#E8E1F4] pt-6">
            {whyLaksh.supportingBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-sm font-semibold text-[#171126]">
                <Icons.CheckCircle2 size={17} className="shrink-0 text-[#0F9D83]" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>

          <Button className="mt-8" onClick={() => scrollToSection("#contact")}>
            Start a Conversation
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-tr from-[#C026D3]/20 via-[#A78BFA]/15 to-[#6D28D9]/20"
            />
            <img
              src={whyLaksh.image}
              alt="Engineer reviewing an application interface on a laptop"
              className="aspect-[4/3] w-full rounded-[22px] border border-[#E8E1F4] object-cover shadow-xl shadow-[#171126]/10"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
