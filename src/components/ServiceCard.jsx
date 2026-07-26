import * as Icons from "lucide-react";
import Reveal from "./common/Reveal.jsx";

export default function ServiceCard({ service, delay = 0, onOpenDetails }) {
  const Icon = Icons[service.icon] ?? Icons.Sparkles;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-[22px] border border-[#E8E1F4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C7B8F5] hover:shadow-[0_20px_45px_-24px_rgba(109,40,217,0.35)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6D28D9] to-[#C026D3]">
          <Icon size={22} className="text-white" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-[#171126]">{service.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-[#5F5A6D]">
          {service.shortDescription}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#E8E1F4] bg-[#F5F1FF] px-3 py-1 text-xs font-semibold text-[#5F5A6D]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => onOpenDetails(service)}
          aria-label={`View details for ${service.title}`}
          className="focus-ring mt-6 inline-flex w-fit items-center gap-1.5 rounded-full text-sm font-bold text-[#7C3AED] transition-colors hover:text-[#6D28D9]"
        >
          View details
          <Icons.ArrowRight size={16} aria-hidden="true" />
        </button>
      </article>
    </Reveal>
  );
}
