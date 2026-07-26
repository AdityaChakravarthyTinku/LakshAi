import * as Icons from "lucide-react";
import Reveal from "./common/Reveal.jsx";
import { capabilityStrip } from "../data/siteContent.js";

export default function CapabilityStrip() {
  return (
    <section aria-label="Capability overview" className="relative bg-[#171126]">
      <div className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityStrip.map((item, index) => {
            const Icon = Icons[item.icon] ?? Icons.Sparkles;
            return (
              <Reveal
                key={item.title}
                delay={index * 0.06}
                className="flex items-start gap-3 border-t border-white/10 pt-5 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#C026D3]">
                  <Icon size={18} className="text-white" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-white/60">
                    {item.text}
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
