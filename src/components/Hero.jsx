import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "./common/Button.jsx";
import { hero } from "../data/siteContent.js";
import { scrollToSection } from "../utils/scrollToSection.js";

export default function Hero() {
  const [imageFailed, setImageFailed] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#171126] via-[#3B1E73] to-[#6D28D9] pt-[76px]"
    >
      {/* Background image layer with gradient fallback */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#171126] via-[#3B1E73] to-[#6D28D9]">
        {!imageFailed && (
          <img
            src={hero.backgroundImage}
            alt=""
            aria-hidden="true"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover opacity-35"
            loading="eager"
          />
        )}
      </div>
      {/* Overlay for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#171126]/80 via-[#221540]/75 to-[#171126]/90"
      />
      {/* Decorative mesh glow */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 mesh-glow opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 node-pattern opacity-[0.15]" />

      <div className="relative mx-auto grid max-w-[1240px] gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-[0.14em] text-white/90"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-2xl text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] text-white"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-xl text-[1.0625rem] leading-relaxed text-white/80"
          >
            {hero.supportingText}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
            <Button
              href="#contact"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              {hero.primaryCta}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button
              href="#solutions"
              variant="outlineOnDark"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#solutions");
              }}
            >
              {hero.secondaryCta}
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
          >
            {hero.trustIndicators.map((indicator) => (
              <li key={indicator} className="flex items-center gap-2 text-sm text-white/85">
                <CheckCircle2 size={16} className="shrink-0 text-[#A78BFA]" aria-hidden="true" />
                {indicator}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Floating AI delivery framework card */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <motion.div
            animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto w-full max-w-sm rounded-[22px] border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur-md"
          >
            <p className="text-xs font-bold tracking-[0.12em] text-white/60">
              {hero.frameworkCard.title.toUpperCase()}
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {hero.frameworkCard.stages.map((stage, index) => (
                <li key={stage} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#C026D3] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-semibold text-white">{stage}</span>
                  {index < hero.frameworkCard.stages.length - 1 && (
                    <span aria-hidden="true" className="ml-auto h-6 w-px bg-white/15" />
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
