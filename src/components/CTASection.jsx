import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./common/Reveal.jsx";
import Button from "./common/Button.jsx";
import { contactInfo } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#171126] via-[#5B21B6] to-[#6D28D9] py-20 sm:py-24">
      <div aria-hidden="true" className="absolute inset-0 mesh-glow opacity-80" />
      <div aria-hidden="true" className="absolute inset-0 node-pattern opacity-[0.12]" />

      <Reveal className="relative mx-auto flex max-w-[820px] flex-col items-center gap-6 px-5 text-center sm:px-8">
        <h2 className="text-[clamp(1.75rem,3.6vw,2.75rem)] font-extrabold leading-[1.15] text-white">
          Have an AI or Software Challenge Worth Solving?
        </h2>
        <p className="max-w-xl text-[1.0625rem] leading-relaxed text-white/80">
          Tell us what you are trying to improve, automate, predict, or build.
          Laksh AI will help identify a practical path from business
          requirement to working solution.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button
            variant="onDark"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Discuss Your Project
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button
            variant="outlineOnDark"
            size="lg"
            href={`mailto:${contactInfo.email}`}
          >
            <Mail size={18} aria-hidden="true" />
            Email Laksh AI
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
