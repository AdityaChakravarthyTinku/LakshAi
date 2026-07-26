import { CheckCircle2 } from "lucide-react";
import Reveal from "./common/Reveal.jsx";
import Button from "./common/Button.jsx";
import { aboutContent } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F1FF] py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-br from-[#6D28D9]/20 via-[#A78BFA]/15 to-[#C026D3]/20"
            />
            <img
              src={aboutContent.image}
              alt="Technology professionals collaborating at a workstation"
              className="aspect-[4/3] w-full rounded-[22px] border border-white/60 object-cover shadow-xl shadow-[#171126]/10"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="text-xs font-bold tracking-[0.18em] text-[#7C3AED]">
            ABOUT LAKSH AI
          </span>
          <h2 className="mt-4 text-[clamp(1.75rem,3.2vw,2.5rem)] font-extrabold leading-[1.15] text-[#171126]">
            Engineering Practical Intelligence Into Modern Business
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[1.0625rem] leading-relaxed text-[#5F5A6D]">
                {paragraph}
              </p>
            ))}
          </div>
          <ul className="mt-6 flex flex-col gap-3">
            {aboutContent.checks.map((check) => (
              <li key={check} className="flex items-start gap-3 text-sm font-semibold text-[#171126]">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#0F9D83]" aria-hidden="true" />
                {check}
              </li>
            ))}
          </ul>
          <Button
            variant="secondary"
            className="mt-7"
            onClick={() => scrollToSection("#process")}
          >
            Learn How We Work
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
